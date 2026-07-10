import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    title: { default: "GenAI Socratic Arena", template: "%s · GenAI Socratic Arena" },
    description: "AI-powered Socratic debate practice for sharper business reasoning, stronger evidence, and more confident communication.",
    openGraph: {
      type: "website",
      url: origin,
      title: "GenAI Socratic Arena",
      description: "Where business ideas learn to defend themselves.",
      images: [{ url: socialImage, width: 1732, height: 908, alt: "GenAI Socratic Arena" }],
    },
    twitter: { card: "summary_large_image", title: "GenAI Socratic Arena", description: "Where business ideas learn to defend themselves.", images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
