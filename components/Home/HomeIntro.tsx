"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import DotField from "../DotField";

interface HomeIntroProps {
  children?: ReactNode;
  onComplete?: () => void;
}

export default function HomeIntro({ children, onComplete }: HomeIntroProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  if (isComplete) {
    return children ?? null;
  }

  return (
    <div className="grid min-h-screen relative place-items-center overflow-hidden bg-black px-6 animate-[nexoraIntroScreen_3s_ease-in-out_both]">

       <div className="pointer-events-none absolute inset-0 z-0 opacity-100 md:opacity-70">
        <DotField
          dotRadius={1.8}
          dotSpacing={10}
          bulgeStrength={60}
          glowRadius={70}
          sparkle={true}
          waveAmplitude={0}
          cursorRadius={280}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(255, 75, 0, 0.32)"
          gradientTo="rgba(255, 176, 0, 0.46)"
          glowColor="rgba(255, 106, 0, 0.78)"
        />
      </div>

      <div className="relative h-[clamp(88px,29.5vw,180px)] w-[clamp(298px,92vw,610px)] [perspective:1000px]">
        <div className="pointer-events-none absolute inset-[-38%] animate-[nexoraIntroAura_3s_ease-in-out_both] rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.16),rgba(255,75,0,0.07)_34%,transparent_66%)] blur-3xl" />

        <div className="pointer-events-none absolute left-[28.77%] top-[5%] h-[88.89%] w-[4px] -translate-x-1/2 origin-center animate-[nexoraIntroBar_3s_cubic-bezier(0.2,0.8,0.2,1)_both] rounded-full bg-white " />

        <div className="absolute inset-y-0 left-0 flex w-[26.72%] animate-[nexoraIntroIcon_3s_cubic-bezier(0.2,0.8,0.2,1)_both] items-center [transform-style:preserve-3d]">
          <Image
            src="/assets/icon.png"
            alt="Nexora Fixes icon"
            width={163}
            height={180}
            priority
            className="h-full w-full object-contain "
          />
        </div>

        <div className="absolute inset-y-0 right-0 flex w-[69.18%] animate-[nexoraIntroWordmark_3s_cubic-bezier(0.2,0.8,0.2,1)_both] items-center [transform-style:preserve-3d]">
          <Image
            src="/assets/logo_after.png"
            alt="Nexora Fixes wordmark"
            width={422}
            height={180}
            priority
            className="h-full w-full object-contain "
          />
        </div>
      </div>
    </div>
  );
}
