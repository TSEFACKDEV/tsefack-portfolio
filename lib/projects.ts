import fs from "node:fs/promises";
import path from "node:path";
import type { Project } from "./content";

const LOCAL_FILE = path.join(process.cwd(), "content", "projects.json");
const REPO_FILE = "content/projects.json";

type GithubConfig = {
  token: string;
  repo: string;
  branch: string;
};

function githubConfig(): GithubConfig | null {
  const token = process.env.GITHUB_TOKEN?.trim();
  const repo = process.env.GITHUB_REPO?.trim();
  if (!token || !repo) return null;
  return {
    token,
    repo,
    branch: process.env.GITHUB_BRANCH?.trim() || "main",
  };
}

export function storageMode(): "github" | "local" {
  return githubConfig() ? "github" : "local";
}

function normalize(projects: Project[]): Project[] {
  return projects.map((project, position) => ({
    ...project,
    index: String(position + 1).padStart(2, "0"),
    published: project.published !== false,
  }));
}

function assertProjects(value: unknown): Project[] {
  if (!Array.isArray(value)) {
    throw new Error("The project store must contain a JSON array.");
  }
  return normalize(value as Project[]);
}

async function readLocal(): Promise<Project[]> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf8");
    return assertProjects(JSON.parse(raw));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

type GithubRead = { projects: Project[]; sha: string };

async function readGithub(config: GithubConfig): Promise<GithubRead> {
  const response = await fetch(
    `https://api.github.com/repos/${config.repo}/contents/${REPO_FILE}?ref=${config.branch}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${config.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub read failed (${response.status}): ${await response.text()}`,
    );
  }

  const payload = (await response.json()) as { content?: string; sha?: string };
  if (!payload.content || !payload.sha) {
    throw new Error("GitHub returned an unexpected content payload.");
  }

  const decoded = Buffer.from(payload.content, "base64").toString("utf8");
  return { projects: assertProjects(JSON.parse(decoded)), sha: payload.sha };
}

async function readAll(): Promise<Project[]> {
  const config = githubConfig();
  if (config) {
    try {
      return (await readGithub(config)).projects;
    } catch (error) {
      console.error("[projects] GitHub read failed, using local fallback.", error);
    }
  }
  return readLocal();
}

async function writeLocal(projects: Project[]): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  const temporary = `${LOCAL_FILE}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(projects, null, 2)}\n`, "utf8");
  await fs.rename(temporary, LOCAL_FILE);
}

async function writeGithub(
  config: GithubConfig,
  projects: Project[],
  message: string,
): Promise<void> {
  const current = await readGithub(config);
  const response = await fetch(
    `https://api.github.com/repos/${config.repo}/contents/${REPO_FILE}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${config.token}`,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(
          `${JSON.stringify(projects, null, 2)}\n`,
          "utf8",
        ).toString("base64"),
        sha: current.sha,
        branch: config.branch,
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub write failed (${response.status}): ${await response.text()}`,
    );
  }
}

async function writeAll(projects: Project[], message: string): Promise<void> {
  const normalized = normalize(projects);
  const config = githubConfig();
  if (config) {
    await writeGithub(config, normalized, message);
    return;
  }
  await writeLocal(normalized);
}

export async function getAllProjects(): Promise<Project[]> {
  return normalize(await readAll());
}

export async function getProjects(): Promise<Project[]> {
  const all = await readAll();
  return normalize(all.filter((project) => project.published !== false));
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await readAll();
  return all.find((project) => project.slug === slug);
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function uniqueSlug(candidate: string, existing: Project[], current?: string) {
  const base = candidate || "project";
  let slug = base;
  let counter = 2;
  while (
    existing.some(
      (project) => project.slug === slug && project.slug !== current,
    )
  ) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  return slug;
}

export type ProjectInput = Omit<
  Project,
  "index" | "slug" | "createdAt" | "updatedAt"
>;

export async function createProject(input: ProjectInput): Promise<Project> {
  const projects = await readAll();
  const now = new Date().toISOString();
  const project: Project = {
    ...input,
    slug: uniqueSlug(slugify(input.title), projects),
    index: "01",
    createdAt: now,
    updatedAt: now,
  };
  await writeAll(
    [project, ...projects],
    `content: publish “${project.title}”`,
  );
  return project;
}

export async function updateProject(
  originalSlug: string,
  input: ProjectInput,
): Promise<Project> {
  const projects = await readAll();
  const current = projects.find((project) => project.slug === originalSlug);
  if (!current) throw new Error("Project not found.");

  const slug = uniqueSlug(
    slugify(input.title || current.title),
    projects,
    originalSlug,
  );

  const updated: Project = {
    ...current,
    ...input,
    slug,
    updatedAt: new Date().toISOString(),
  };

  await writeAll(
    projects.map((project) =>
      project.slug === originalSlug ? updated : project,
    ),
    `content: update “${updated.title}”`,
  );
  return updated;
}

export async function deleteProject(slug: string): Promise<void> {
  const projects = await readAll();
  const target = projects.find((project) => project.slug === slug);
  if (!target) throw new Error("Project not found.");
  await writeAll(
    projects.filter((project) => project.slug !== slug),
    `content: remove “${target.title}”`,
  );
}

export async function moveProject(
  slug: string,
  direction: "up" | "down",
): Promise<void> {
  const projects = await readAll();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) throw new Error("Project not found.");
  const target = direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= projects.length) return;

  const next = [...projects];
  [next[index], next[target]] = [next[target], next[index]];
  await writeAll(next, `content: reorder “${projects[index].title}”`);
}
