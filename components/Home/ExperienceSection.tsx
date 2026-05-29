"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbArrowUpRight } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 1000, suffix: "+", label: "Leads generated" },
  { target: 4.8, suffix: "x", decimals: 1, label: "Avg. ROAS lift" },
  { target: 24, suffix: "/7", label: "Growth systems" },
];

const resultStats = [
  { target: 67, suffix: "%", label: "Lower CPA" },
  { target: 14, suffix: "d", label: "Launch avg." },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hasCountedRef = useRef(false);
  const [countProgress, setCountProgress] = useState(0);

  const formatCounter = (
    target: number,
    suffix = "",
    decimals = 0
  ): string => {
    const value = target * countProgress;
    const formatted = decimals
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString();

    return `${formatted}${suffix}`;
  };

  useEffect(() => {
    const section = sectionRef.current;
    const imageFrame = imageFrameRef.current;
    const image = imageRef.current;

    if (!section || !imageFrame || !image) return;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        gsap.set(imageFrame, {
          width: "100%",
          transformOrigin: "right center",
        });

        gsap.fromTo(
          image,
          {
            scale: 1.0,
            transformOrigin: "right center",
          },
          {
            scale: 1.2,
            ease: "none",
            transformOrigin: "right center",
            immediateRender: true,
            overwrite: "auto",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              end: "bottom 50%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      media.add("(max-width: 1023px)", () => {
        gsap.set(imageFrame, {
          width: "100%",
        });
        gsap.set(image, {
          scale: 1.08,
          transformOrigin: "right center",
        });
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let tween: gsap.core.Tween;
    const startCounters = () => {
      if (hasCountedRef.current) return;

      hasCountedRef.current = true;

      tween = gsap.to(
        { progress: 0 },
        {
          progress: 1,
          duration: 2.6,
          ease: "power2.out",
          onUpdate() {
            setCountProgress(this.targets()[0].progress);
          },
          onComplete() {
            setCountProgress(1);
          },
        }
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startCounters();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    observer.observe(section);

    if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
      startCounters();
    }

    const fallbackTimer = window.setTimeout(startCounters, 700);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
      if (tween) tween.kill();
      hasCountedRef.current = false;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black lg:h-screen lg:max-h-[800px]"
    >
      <div className="grid min-h-[520px] w-full lg:h-full lg:min-h-0 lg:grid-cols-2">
        <div className="relative min-h-[448px] overflow-hidden lg:h-full lg:min-h-0">
          <div
            ref={imageFrameRef}
            className="absolute inset-y-0 left-0 right-0 w-full overflow-hidden"
          >
            <Image
              ref={imageRef}
              src="/assets/experience.png"
              alt="Nexora Fixes creativity and digital growth visual"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-right"
              priority={false}
            />
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-primary-2/80 rounded-sm p-8 text-black md:p-10 lg:h-full lg:min-h-0 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.11)_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,176,0,0.34),transparent_34%)]" />

          <div className="relative flex h-full flex-col justify-center">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-black/80">
                  Experience
                </p>
                <h2 className="mt-4 text-6xl font-black leading-none tracking-normal text-black md:text-7xl">
                  {formatCounter(5, "+")}
                </h2>
                <p className="mt-3 max-w-[280px] text-sm font-bold uppercase tracking-wide text-black">
                  Years building digital growth engines
                </p>
                <p className="mt-5 max-w-[350px] text-md leading-6 text-black/85">
                  Nexora Fixes blends paid ads, high-converting creatives,
                  websites, Shopify stores, WordPress builds, and custom web
                  solutions into one result-focused growth system.
                </p>
              </div>

              <div className="flex flex-row lg:flex-col w-fit shrink-0 gap-4 rounded-sm border border-black/70 bg-black/85 p-5 text-primary-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)] lg:w-44">
                {resultStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black leading-none tracking-normal">
                      {formatCounter(stat.target, stat.suffix)}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-primary-2/75">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3  border-y-3 border-black/90 py-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between gap-4 text-md font-medium text-black font-heading"
                >
                  <span className="font-black text-black">
                    {formatCounter(stat.target, stat.suffix, stat.decimals)}
                  </span>
                  <span className="text-right font-medium text-black/75">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-black px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-background hover:text-white"
            >
              Our services
              <TbArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
