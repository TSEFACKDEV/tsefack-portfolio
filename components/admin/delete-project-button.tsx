"use client";

import { Trash2 } from "lucide-react";
import { deleteProjectAction } from "@/app/admin/actions";

export function DeleteProjectButton({ slug, title }: { slug: string; title: string }) {
  return (
    <form
      action={deleteProjectAction}
      onSubmit={(event) => {
        if (
          !window.confirm(
            `Supprimer définitivement « ${title} » ? Cette action est enregistrée dans le dépôt.`,
          )
        ) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        aria-label={`Supprimer ${title}`}
        title="Supprimer"
        className="grid h-8 w-8 place-items-center rounded-full border border-line text-faint transition-colors hover:border-red-500/40 hover:text-red-500"
      >
        <Trash2 className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
      </button>
    </form>
  );
}
