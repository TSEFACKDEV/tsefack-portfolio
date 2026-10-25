import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "tck_studio";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const fallbackPassword =
  process.env.NODE_ENV === "production" ? "" : "studio";

function adminPassword() {
  return process.env.ADMIN_PASSWORD ?? fallbackPassword;
}

function sessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    createHash("sha256")
      .update(`tck-studio:${adminPassword()}`)
      .digest("hex")
  );
}

export function authConfigured() {
  return adminPassword().length > 0;
}

export function usingFallbackPassword() {
  return !process.env.ADMIN_PASSWORD && process.env.NODE_ENV !== "production";
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function verifyPassword(candidate: string) {
  const expected = adminPassword();
  if (!expected) return false;
  try {
    return timingSafeEqual(digest(candidate), digest(expected));
  } catch {
    return false;
  }
}

function sign(payload: string) {
  return createHmac("sha256", sessionSecret()).update(payload).digest("hex");
}

export function createSessionToken() {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = sign(payload);
  try {
    if (
      !timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"))
    ) {
      return false;
    }
  } catch {
    return false;
  }
  const expires = Number(payload);
  return Number.isFinite(expires) && expires > Date.now();
}

export async function isAuthenticated() {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}

export async function requireAuth() {
  if (!(await isAuthenticated())) redirect("/admin/login");
}

export async function startSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
