"use client";

import { Marquee } from "@/components/ui/marquee";

const words = ["Marketing", "Revenue", "Leads", "Branding", "Sales", "Growth", "Conversion"];

function Separator() {
  return (
    <span
      aria-hidden="true"
      className="mx-8 shrink-0 font-heading text-[clamp(42px,9vw,104px)] font-black leading-none text-white md:mx-12"
    >
      *
    </span>
  );
}

function WordItem({ word, index }: { word: string; index: number }) {
  const isFilled = index % 2 === 0;

  return (
    <span
      className="whitespace-nowrap font-heading text-[clamp(40px,9vw,102px)] font-black leading-none tracking-normal"
      style={
        isFilled
          ? { color: "#ffffff" }
          : {
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.95)",
            }
      }
    >
      {word}
    </span>
  );
}

function StripContent() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((word, index) => (
        <div key={`${word}-${index}`} className="flex items-center">
          <WordItem word={word} index={index} />
          <Separator />
        </div>
      ))}
    </div>
  );
}

export default function TextStrip() {
  return (
    <section className="relative mb-20 lg:-mt-8 -mt-10 overflow-hidden bg-black py-2 ">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-1 via-primary-2 to-secondary py-10 shadow-[0_0_80px_rgba(255,122,0,0.18)] md:py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black/35 to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black/25 to-transparent md:w-40" />

        <Marquee repeat={3} className="p-0 [--duration:82s] [--gap:0px]">
          <StripContent />
        </Marquee>
      </div>
    </section>
  );
}
