import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Studio",
    template: "%s — Studio",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <div className="min-h-dvh bg-bg text-ink">{children}</div>;
}
