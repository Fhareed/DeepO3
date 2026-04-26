import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DeepO3",
    short_name: "DeepO3",
    description:
      "DeepO3 builds AI-native software solutions for firms and organizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0f16",
    theme_color: "#0c0f16",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
