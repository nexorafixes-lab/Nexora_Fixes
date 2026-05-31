"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const FEATURES_DATA = [
   {
    badge: "Content consistency",
    heading: "Social Media Management",
    para: "We help brands show up consistently with planned content, polished visuals, captions, scheduling, and performance review. Your social channels stay active, aligned, and built around audience trust.",
    cta: "Explore Social Media",
    cta_link: "/services/social-media-management",
    image: "/assets/service__4.png",
  },
  {
    badge: "Meta, Instagram, TikTok",
    heading: "Digital Marketing",
    para: "Nexora builds paid growth systems across Meta Ads, Instagram Ads, and TikTok Ads. We shape offers, audiences, creative angles, retargeting, and reporting so every campaign moves closer to revenue.",
    cta: "Explore Digital Marketing",
    cta_link: "/services/digital-marketing",
    image: "/assets/service_2.png",
  },
  
  {
    badge: "Visual identity",
    heading: "Graphic Design & Branding Services",
    para: "Your brand needs to be easy to notice, trust, and remember. Nexora designs logos, brand systems, social creatives, campaign visuals, and presentation assets that make your business look sharper.",
    cta: "Explore Branding",
    cta_link: "/services/graphic-design-and-branding",
    image: "/assets/service__3.png",
  },
 {
    badge: "Sites that convert",
    heading: "Website & E-Commerce",
    para: "We build business websites and ecommerce stores that feel premium, load fast, and guide visitors toward action. From landing pages to product flow, every screen is shaped around clarity and conversion.",
    cta: "Explore Websites",
    cta_link: "/services/website-and-ecommerce",
    image: "/assets/service__8.png",
  },
  {
    badge: "Search visibility",
    heading: "SEO & Organic Growth",
    para: "Organic growth compounds when your content, structure, and technical foundation work together. Nexora improves search visibility through SEO planning, on-page optimization, and growth-focused content.",
    cta: "Explore SEO",
    cta_link: "/services/seo",
    image: "/assets/service_5.png",
  },
  {
    badge: "Custom systems",
    heading: "Software & App Development",
    para: "We create custom applications for teams that need more than templates. CRMs, dashboards, portals, booking flows, and internal tools are built around the workflows that move revenue.",
    cta: "Explore Development",
    cta_link: "/services/software-development",
    image: "/assets/service_6.png",
  },
  {
    badge: "Numbers made clear",
    heading: "Accounts & Finance",
    para: "We support businesses with cleaner financial workflows, reporting structures, bookkeeping support, and account systems that make decisions easier to track, understand, and improve.",
    cta: "Explore Finance",
    cta_link: "/services/accounts-and-finance",
    image: "/assets/service__7.png",
  },
];

const ServicesCards = () => {
  return (
    <section id="features" className="w-full bg-transparent pb-[7vh]">
      {FEATURES_DATA.map((feature, i) => {
        const shrink = i * 10;

        return (
          <div
            key={feature.heading}
            className="card-container sticky flex min-h-[100svh] w-full items-center justify-center px-4 sm:px-6 md:h-screen"
            style={{
              top: "clamp(10px, 2vh, 120px)",
              zIndex: i + 1,
            }}
          >
            <div
              className={cn(
                "feature-card",
                "w-full max-w-6xl md:h-[calc(var(--service-card-height)-var(--service-card-shrink))]",
                "flex flex-col md:flex-row items-center md:gap-12 gap-3",
                "p-7 sm:p-8 md:p-16",
                "rounded-2xl border border-secondary-2/20",
                "bg-black/20 backdrop-blur-2xl",
                "overflow-hidden"
              )}
              style={{
                "--service-card-shrink": `${shrink}px`,
                maxWidth: `calc(72rem - ${shrink}px)`,
              } as CSSProperties}
            >
              {/* Left */}
              <div className="w-full md:w-1/2 flex flex-col md:gap-6 gap-3">
                <div className="self-start px-4 py-[2px]    bg-gradient-to-r from-primary-1 to-secondary rounded-full">
                  <span className="text-black text-[10px] md:text-[12px] font-mono font-black  uppercase tracking-widest">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="display-h4 font-medium! text-white">
                  {feature.heading}
                </h3>

                <p className="display-p2 text-white/60">{feature.para}</p>

                <Link
                  href={feature.cta_link}
                  className=" inline-flex w-fit items-center rounded-full border border-secondary/80 bg-black  px-5 py-2 text-sm font-bold text-white transition hover:border-secondary hover:bg-gradient-to-r hover:from-primary-1 hover:to-secondary-1 hover:text-black"
                >
                  {feature.cta}
                </Link>
              </div>

              {/* Right */}
              <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-full max-h-[350px] max-sm:mt-4">
                <div className="w-full h-full md:min-h-[320px] min-h-[150px] rounded-[8px] bg-[#0f1117] border border-primary-1/10 overflow-hidden relative">
                  <Image
                    src={feature.image}
                    alt={`${feature.heading} service visual`}
                    fill
                    className="object-cover object-center md:object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={i === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesCards;
