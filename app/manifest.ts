import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calvin Klein Tsefack — Fullstack Developer",
    short_name: "Tsefack",
    description:
      "Portfolio of Calvin Klein Tsefack, fullstack developer and software engineering student based in Douala, Cameroon.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#0b1f3a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
