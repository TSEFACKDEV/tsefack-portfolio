"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { loginAction, type LoginState } from "@/app/admin/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-all duration-300 hover:gap-3.5 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent dark:text-accent-contrast"
    >
      {pending ? "Connexion…" : "Ouvrir le studio"}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </button>
  );
}

export function LoginForm({ configured }: { configured: boolean }) {
  const [state, action] = useActionState<LoginState, FormData>(
    loginAction,
    null,
  );

  return (
    <form action={action}>
      <label htmlFor="password" className="label mb-2 block text-[8px] text-muted">
        Mot de passe administrateur
      </label>
      <div className="relative">
        <LockKeyhole
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
          strokeWidth={1.6}
          aria-hidden="true"
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="••••••••"
          disabled={!configured}
          className="w-full rounded-lg border border-line bg-bg py-3 pl-10 pr-4 text-[13px] text-ink transition-colors placeholder:text-faint focus:border-accent focus:outline-none disabled:opacity-50"
        />
      </div>

      {state?.error && (
        <p
          role="alert"
          className="mt-3 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3 py-2 text-[11px] leading-relaxed text-red-600 dark:text-red-400"
        >
          {state.error}
        </p>
      )}

      {!configured && (
        <p className="mt-3 rounded-lg border border-accent/25 bg-accent-soft px-3 py-2 text-[11px] leading-relaxed text-ink">
          Définissez <code className="font-mono text-[10px]">ADMIN_PASSWORD</code>{" "}
          dans les variables d&apos;environnement pour activer la connexion.
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
