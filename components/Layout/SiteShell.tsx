"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import HomeIntro from "@/components/Home/HomeIntro";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const INTRO_STORAGE_KEY = "nexora-home-intro-shown-at";
const INTRO_COOLDOWN_MS = 10 * 60 * 1000;

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showHomeIntro, setShowHomeIntro] = useState<boolean | null>(
    pathname === "/" ? null : false
  );

  useEffect(() => {
    queueMicrotask(() => {
      if (pathname !== "/") {
        setShowHomeIntro(false);
        return;
      }

      const lastShown = Number(
        window.localStorage.getItem(INTRO_STORAGE_KEY) ?? 0
      );
      const shouldShow =
        !Number.isFinite(lastShown) ||
        lastShown <= 0 ||
        Date.now() - lastShown > INTRO_COOLDOWN_MS;

      if (shouldShow) {
        window.localStorage.setItem(INTRO_STORAGE_KEY, String(Date.now()));
      }

      setShowHomeIntro(shouldShow);
    });
  }, [pathname]);

  const handleIntroComplete = useCallback(() => {
    window.localStorage.setItem(INTRO_STORAGE_KEY, String(Date.now()));
    setShowHomeIntro(false);
  }, []);

  if (showHomeIntro === null) {
    return <div className="min-h-screen bg-black" />;
  }

  if (showHomeIntro) {
    return <HomeIntro onComplete={handleIntroComplete} />;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
