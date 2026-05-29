
// app/layout.tsx
import "./globals.css";
import "lenis/dist/lenis.css";
import { body_font, heading_font, dm_mono } from "./lib/fonts"
import { seoMetadata } from "./lib/config";
import { cn } from "@/lib/utils";
import SmoothScrollProvider from "@/components/Layout/SmoothScrollProvider";
import SiteShell from "@/components/Layout/SiteShell";

export const metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(dm_mono.variable, "font-sans")}>
      <body className={`${body_font.variable} ${heading_font.variable} ${dm_mono.variable} antialiased bg-black`}>
        <SmoothScrollProvider>
          <SiteShell>{children}</SiteShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
