"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  authConfigured,
  endSession,
  requireAuth,
  startSession,
  verifyPassword,
} from "@/lib/auth";
import { coverPresets, type CoverPreset } from "@/lib/covers";
import type { Project } from "@/lib/content";
import {
  createProject,
  deleteProject,
  moveProject,
  updateProject,
  type ProjectInput,
} from "@/lib/projects";

export type LoginState = { error?: string } | null;
export type ProjectState = { error?: string } | null;

const attempts = new Map<string, { count: number; resetAt: number }>();

async function clientKey() {
  const store = await headers();
  return (
    store.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    store.get("x-real-ip") ||
    "local"
  );
}

function rateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 0, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  return entry.count >= 8;
}

function noteFailure(key: string) {
  const entry = attempts.get(key);
  if (entry) entry.count += 1;
}

export async function loginAction(
  _previous: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!authConfigured()) {
    return {
      error:
        "Aucun mot de passe n'est configuré. Définissez ADMIN_PASSWORD dans vos variables d'environnement.",
    };
  }

  const key = await clientKey();
  if (rateLimited(key)) {
    return {
      error: "Trop de tentatives. Réessayez dans quelques minutes.",
    };
  }

  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    noteFailure(key);
    await new Promise((resolve) => setTimeout(resolve, 350));
    return { error: "Mot de passe incorrect." };
  }

  attempts.delete(key);
  await startSession();
  redirect("/admin");
}

export async function logoutAction() {
  await endSession();
  redirect("/admin/login");
}

function text(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function boolean(formData: FormData, name: string) {
  return formData.get(name) === "on" || formData.get(name) === "true";
}

function list(formData: FormData, name: string) {
  return text(formData, name)
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function isSafeLink(value: string) {
  if (!value) return true;
  if (value.startsWith("/")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function saveProjectAction(
  _previous: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  await requireAuth();

  const title = text(formData, "title");
  const subtitle = text(formData, "subtitle");
  const description = text(formData, "description");
  const year = text(formData, "year") || String(new Date().getFullYear());
  const role = text(formData, "role") || "Developer";
  const category = text(formData, "category");
  const href = text(formData, "href");
  const repo = text(formData, "repo");
  const image = text(formData, "image");
  const coverValue = text(formData, "cover");
  const visualValue = text(formData, "visual");
  const originalSlug = text(formData, "originalSlug");

  if (title.length < 2) return { error: "Le titre est requis." };
  if (!subtitle) return { error: "Le sous-titre est requis." };
  if (description.length < 20) {
    return { error: "La description doit contenir au moins 20 caractères." };
  }
  if (!["Commercial", "Academic", "Ongoing"].includes(category)) {
    return { error: "Catégorie invalide." };
  }
  if (!isSafeLink(href) || !isSafeLink(repo)) {
    return { error: "Les liens doivent être des URL http(s) ou des chemins locaux." };
  }

  let domain = text(formData, "domain");
  if (!domain && href) {
    try {
      domain = new URL(href).hostname.replace(/^www\./, "");
    } catch {
      domain = "";
    }
  }

  const images = list(formData, "images");

  const input: ProjectInput = {
    title,
    subtitle,
    year,
    role,
    category: category as Project["category"],
    description,
    stack: list(formData, "stack"),
    href: href || undefined,
    repo: repo || undefined,
    featured: boolean(formData, "featured"),
    glyph: (text(formData, "glyph") || title.charAt(0)).slice(0, 2).toUpperCase(),
    cover: (coverPresets as readonly string[]).includes(coverValue)
      ? (coverValue as CoverPreset)
      : "navy",
    image: image || undefined,
    imageAlt: text(formData, "imageAlt") || undefined,
    domain: domain || undefined,
    visual:
      visualValue === "radar" || visualValue === "mobile"
        ? visualValue
        : undefined,
    images: images.length ? images : undefined,
    highlights: list(formData, "highlights"),
    published: boolean(formData, "published"),
  };

  try {
    let saved;
    if (originalSlug) {
      saved = await updateProject(originalSlug, input);
      if (saved.slug !== originalSlug) revalidatePath(`/work/${originalSlug}`);
    } else {
      saved = await createProject(input);
    }
    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/sitemap.xml");
    revalidatePath(`/work/${saved.slug}`);
  } catch (error) {
    console.error("[admin] project save failed", error);
    return {
      error:
        "Enregistrement impossible. Vérifiez la configuration GitHub ou les permissions du dossier content.",
    };
  }

  redirect("/admin?saved=1");
}

export async function deleteProjectAction(formData: FormData) {
  await requireAuth();
  const slug = String(formData.get("slug") ?? "");
  if (slug) {
    await deleteProject(slug);
    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath("/sitemap.xml");
    revalidatePath(`/work/${slug}`);
  }
  redirect("/admin?deleted=1");
}

export async function moveProjectAction(formData: FormData) {
  await requireAuth();
  const slug = String(formData.get("slug") ?? "");
  const direction = formData.get("direction") === "up" ? "up" : "down";
  if (slug) {
    await moveProject(slug, direction);
    revalidatePath("/");
    revalidatePath("/admin");
  }
  redirect("/admin");
}
