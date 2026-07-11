import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://genai-socratic-arena.xssx205602.chatgpt.site";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${siteUrl}${siteBasePath}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}${siteBasePath || "/"}`),
  title: { default: "GenAI Socratic Arena", template: "%s · GenAI Socratic Arena" },
  description: "AI-powered Socratic debate practice for sharper business reasoning, stronger evidence, and more confident communication.",
  openGraph: {
    type: "website",
    url: `${siteUrl}${siteBasePath || "/"}`,
    title: "GenAI Socratic Arena",
    description: "Where business ideas learn to defend themselves.",
    images: [{ url: socialImage, width: 1200, height: 629, alt: "GenAI Socratic Arena" }],
  },
  twitter: { card: "summary_large_image", title: "GenAI Socratic Arena", description: "Where business ideas learn to defend themselves.", images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
