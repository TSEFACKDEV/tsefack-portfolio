import { requireAuth } from "@/lib/auth";
import { StudioHeader } from "@/components/admin/studio-header";

export const dynamic = "force-dynamic";

export default async function StudioLayout({ children }: LayoutProps<"/admin">) {
  await requireAuth();

  return (
    <div className="min-h-dvh">
      <StudioHeader />
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:py-12">
        {children}
      </div>
    </div>
  );
}
