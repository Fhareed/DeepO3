import type { Metadata, Viewport } from "next";
import { Onest, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.universal.css";
import "./redesign.css";
import LegacyChrome from "../components/LegacyChrome";

// Onest = closest Google Font to Clarify's Aspekta (crisp low-contrast grotesque)
const onestFont = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap"
});

// IBM Plex Sans = Clarify's uppercase eyebrow/label font
const plexFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-plex",
  display: "swap"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://deepo3.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DeepO3 | AI-Native Software Solutions",
    template: "%s | DeepO3"
  },
  description:
    "DeepO3 builds AI-native software solutions for firms and organizations. Combining product thinking, AI systems, and robust engineering.",
  applicationName: "DeepO3",
  keywords: [
    "AI software",
    "AI-native",
    "LLM",
    "RAG",
    "multi-agent systems",
    "computer vision",
    "enterprise AI",
    "AI consulting",
    "DeepO3"
  ],
  authors: [{ name: "DeepO3" }],
  creator: "DeepO3",
  publisher: "DeepO3",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DeepO3",
    title: "DeepO3 | AI-Native Software Solutions",
    description:
      "DeepO3 builds AI-native software solutions for firms and organizations. Combining product thinking, AI systems, and robust engineering."
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepO3 | AI-Native Software Solutions",
    description:
      "DeepO3 builds AI-native software solutions for firms and organizations."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#003a63" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onestFont.variable} ${plexFont.variable} ${monoFont.variable}`}
    >
      <body id="site-top">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LegacyChrome>{children}</LegacyChrome>
      </body>
    </html>
  );
}
