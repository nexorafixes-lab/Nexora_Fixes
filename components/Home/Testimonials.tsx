"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Nexora rebuilt our website and helped our Meta ads bring in stronger traffic with a cleaner, more premium brand experience.",
    by: "Glowsome",
    service: "Website + Meta Ads",
  },
  {
    tempId: 1,
    testimonial:
      "The website looks professional, and the creatives made our accounting services feel clearer and more trustworthy to new leads.",
    by: "YSM Accountants",
    service: "Website + Creatives",
  },
  {
    tempId: 2,
    testimonial:
      "They turned a technical product into a sleek website that communicates fast and guides visitors toward conversion.",
    by: "Orient AI Platform",
    service: "Conversion Website",
  },
  {
    tempId: 3,
    testimonial:
      "Our job board needed a custom flow, and Nexora built a solution that fits how our users actually work.",
    by: "Beyond Hut",
    service: "Custom Job Board",
  },
  {
    tempId: 4,
    testimonial:
      "Their ad management helped us improve ROI, reduce wasted spend, and understand which campaigns were really moving revenue.",
    by: "Zeno Tech",
    service: "Performance Ads",
  },
  {
    tempId: 5,
    testimonial:
      "Nexora managed our campaigns with sharper targeting and consistent optimization, helping us push revenue in the right direction.",
    by: "GoldStone Clothing",
    service: "Paid Ads",
  },
];

type Testimonial = (typeof testimonials)[number];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}: {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}) {
  const isCenter = position === 0;

  return (
    <article
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden border p-6 transition-all duration-500 ease-in-out sm:p-8",
        isCenter
          ? "z-20 border-black/70 bg-primary-2 text-black shadow-[0_12px_0_4px_rgba(255,75,0,0.22),0_30px_90px_rgba(255,122,0,0.22)]"
          : "z-10 border-secondary-2/20 bg-bg-surface/90 text-white shadow-[0_18px_60px_rgba(0,0,0,0.42)] hover:border-secondary/55"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.45) * position}px)
          translateY(${isCenter ? -54 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      {isCenter ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.11)_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,176,0,0.34),transparent_34%)]" />
        </>
      ) : null}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-black/30" : "bg-secondary-2/20"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      <div
        className={cn(
          "relative z-10 mb-5 grid h-14 w-14 place-items-center border font-heading text-lg font-black",
          isCenter
            ? "border-black/30 bg-black text-secondary"
            : "border-secondary/30 bg-black text-white"
        )}
        style={{
          boxShadow: isCenter
            ? "4px 4px 0 rgba(0,0,0,0.22)"
            : "4px 4px 0 rgba(255,122,0,0.18)",
        }}
      >
        {getInitials(testimonial.by)}
      </div>

      <Quote
        className={cn(
          "relative z-10 mb-3 h-6 w-6",
          isCenter ? "text-black/55" : "text-secondary"
        )}
      />

      <h3
        className={cn(
          "relative z-10 font-heading text-lg font-bold leading-snug sm:text-xl",
          isCenter ? "text-black" : "text-white"
        )}
      >
        &quot;{testimonial.testimonial}&quot;
      </h3>

      <p
        className={cn(
          "absolute bottom-6 left-6 right-6 z-10 text-sm font-semibold italic sm:bottom-8 sm:left-8 sm:right-8",
          isCenter ? "text-black/72" : "text-white/58"
        )}
      >
        - {testimonial.by}
        <span className="mt-1 block text-xs not-italic">
          {testimonial.service}
        </span>
      </p>
    </article>
  );
}

export default function Testimonials() {
  const [cardSize, setCardSize] = useState(290);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = useCallback((steps: number) => {
    if (steps === 0) return;

    setTestimonialsList((currentList) => {
      const newList = [...currentList];

      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return currentList;
          newList.push({ ...item, tempId: Date.now() + i });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return currentList;
          newList.unshift({ ...item, tempId: Date.now() + i });
        }
      }

      return newList;
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => handleMove(1), 6000);
    return () => window.clearInterval(interval);
  }, [handleMove]);

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-20">

      <div className="pointer-events-none absolute left-1/2 top-16 h-[460px] w-[70vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/18 via-secondary/10 to-transparent blur-[110px]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-2 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
            Voices of Growth
          </div>
          <h2 className="display-h2 text-white">
            Dont Take Our Word For It{" "}
            <span className="nexora-gradient-text">Hear It From Them</span>.
          </h2>
        </div>

        <div
          className="relative mx-auto w-full max-w-6xl overflow-hidden"
          style={{ height: 600 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 bg-gradient-to-r from-black to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-20 bg-gradient-to-l from-black to-transparent sm:w-32" />

          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;

            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}

          <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-3">
            <button
              type="button"
              onClick={() => handleMove(-1)}
              className="grid h-12 w-12 place-items-center border border-secondary/50 bg-black/80 text-secondary transition hover:bg-secondary hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-14 sm:w-14"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleMove(1)}
              className="grid h-12 w-12 place-items-center border border-secondary/50 bg-black/80 text-secondary transition hover:bg-secondary hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-14 sm:w-14"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
