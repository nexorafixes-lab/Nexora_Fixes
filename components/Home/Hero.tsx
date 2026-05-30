import {
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";
import DotField from "@/components/DotField";
import HeroGrowthOrbit from "@/components/Home/HeroGrowthOrbit";
import { cn } from "@/lib/utils";

const trustAvatars = [
  {
    src: "/assets/person1.png",
    alt: "Nexora Fixes client portrait 1",
  },
  {
    src: "/assets/person2.png",
    alt: "Nexora Fixes client portrait 2",
  },
  {
    src: "/assets/person3.png",
    alt: "Nexora Fixes client portrait 3",
  },
  {
    src: "/assets/person4.png",
    alt: "Nexora Fixes client portrait 4",
  },
];



function Hero() {
  return (
    <section className="hero-bg relative isolate min-h-screen overflow-hidden py-16">
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
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_62%,rgba(0,0,0,0.4)_82%,rgba(0,0,0,0.84)_100%)] md:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_42%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black via-black/70 to-transparent md:h-52" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-black via-black/70 to-transparent md:h-52" />

      <div className="container relative z-10 grid items-center gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,0.85fr)] lg:gap-8 xl:gap-10">
        {/* 1st col */}
        <div className="w-full max-w-[760px]">
          <div className="bg-black/20 shadow-inner shadow-secondary/30 border border-primary-1/20 backdrop-blur-sm mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/90">
            <span className="capitalize">For brands ready to scale</span>
          </div>

          <h1 className="display-h1 fade-in-top font-semibold! leading-[0.96] tracking-normal text-white">
            From{" "}
            <span className="nexora-gradient-text">
              Clicks
            </span>{" "}
            to{" "} <br/>
            <span className="nexora-gradient-text">
              Customers
            </span>
            ,<br /> We Handle It All.
          </h1>

          <p className="mt-3 max-w-[560px] display-p1 leading-[1.7] text-text-2">
            From ad campaigns to ecommerce stores, from creatives to custom software, Nexora Fixes cover every corner of your digital growth.
          </p>

          <div className="mt-4 flex flex-col-reverse items-start gap-6">
            <a
              href="#contact"
              className={cn(
                "group relative inline-flex h-14 w-fit shrink-0 items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-transform hover:scale-105 active:scale-95",
              )}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-tertiary via-primary-2 to-secondary" />
              <span className="relative flex h-full w-full items-center gap-3 rounded-full bg-background py-1 pl-7 pr-2 text-base font-semibold text-white transition-colors group-hover:bg-transparent">
                Get A Free Consultation
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-background transition ">
                  <TbArrowUpRight className="h-6 w-6" />
                </span>
              </span>
            </a>

            <div className="flex  min-w-0 flex-wrap items-center gap-4">
              <div className="flex shrink-0 -space-x-3">
                {trustAvatars.map((avatar) => (
                  <Image
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-12 w-12 rounded-full border-2 border-background bg-bg-surface object-cover shadow-[0_0_20px_rgba(255,75,0,0.18)]"
                  />
                ))}
              </div>

              <div className="grid gap-1">
                <div className="flex items-center gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm font-medium text-text-2">
                  Trusted by 220+ clients
                </p>
              </div>
            </div>
          </div>

          
        </div>
        <HeroGrowthOrbit />
      </div>
    </section>
  );
}

export default Hero;
