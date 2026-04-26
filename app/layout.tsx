import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.universal.css";
import { StartupLoader } from "../components/StartupLoader";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});
import Silk from "../components/Silk";
import GradualBlur from "../components/GradualBlur";
import ClickSpark from "../components/ClickSpark";
import StaggeredMenu from "../components/StaggeredMenu";
import GlobalScrollStack from "../components/GlobalScrollStack";
import CinematicFooter from "../components/CinematicFooter";
import FuzzyText from "../components/FuzzyText";

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
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c0f16" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f16" }
  ]
};

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Products", ariaLabel: "View the product suite", link: "/products" },
  { label: "Solutions", ariaLabel: "View solutions", link: "/solutions" },
  { label: "Case Studies", ariaLabel: "Read case studies", link: "/case-studies" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" }
];

const socialItems = [
  { label: "Email", link: "mailto:contact@deepo3.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "GitHub", link: "https://github.com" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body id="site-top">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <StartupLoader />
        <div className="silk-background" aria-hidden>
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* ClickSpark wraps the whole site so clicks anywhere produce the spark effect */}
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1}
        >
          <div className="site-chrome">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#0c0f16"
              changeMenuColorOnOpen={true}
              colors={["#1B1722", "#2F293A", "#5227FF"]}
              accentColor="#69b5ff"
              isFixed={true}
              closeOnClickAway={true}
              logoUrl={
                <span className="deepo3-wordmark" aria-label="DeepO3">
                  <FuzzyText
                    fontSize="1.85rem"
                    fontWeight={700}
                    color="#ffffff"
                    baseIntensity={0.04}
                    hoverIntensity={0.24}
                    fuzzRange={6}
                    direction="horizontal"
                    transitionDuration={3}
                  >
                    DeepO3
                  </FuzzyText>
                </span>
              }
              className="site-staggered-menu"
            />

            <div className="main-content-shell">
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
            </div>

            <GlobalScrollStack />
            <CinematicFooter />

            <GradualBlur
              target="page"
              preset="footer"
              position="bottom"
              height="4rem"
              strength={3.8}
              divCount={12}
              curve="linear"
              exponential
              opacity={1}
              className="site-bottom-gradual-blur"
            />
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
