"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const FEATURES_DATA = [
  {
    badge: "High-intent traffic",
    heading: "Meta Ads",
    para: "Nexora builds Meta campaigns that turn attention into booked calls, leads, and store revenue. We shape the offer, audience, creative angles, retargeting, and reporting so every test teaches the next scale move.",
    cta: "Explore Meta Ads",
    cta_link: "/services/meta-ads",
    image: "/assets/service1.png",
  },
  {
    badge: "Demand capture",
    heading: "Google Ads",
    para: "We help you show up when buyers are already searching. From keyword intent and landing-page alignment to conversion tracking and budget control, Nexora turns search traffic into measurable pipeline.",
    cta: "Explore Google Ads",
    cta_link: "/services/google-ads",
    image: "/assets/service2.png",
  },
  {
    badge: "Scroll-stopping creatives",
    heading: "Creatives Design",
    para: "Your ads only work when people stop, understand, and act. Nexora designs hooks, static creatives, carousels, and campaign visuals that make offers easier to trust and easier to click.",
    cta: "Explore Creatives",
    cta_link: "/services/creative-design",
    image: "/assets/service3.png",
  },
  {
    badge: "Systems that sell",
    heading: "Custom Software Application",
    para: "We create custom web applications for teams that need more than templates. CRMs, dashboards, booking flows, portals, and internal tools are built around the workflows that move revenue.",
    cta: "Explore Software",
    cta_link: "/services/custom-software",
    image: "/assets/service6.png",
  },
  {
    badge: "Commerce conversion",
    heading: "Shopify Store",
    para: "Nexora builds Shopify stores that feel premium and remove buying friction. Product pages, navigation, trust signals, checkout flow, and tracking are shaped to turn visitors into customers.",
    cta: "Explore Shopify",
    cta_link: "/services/shopify-store",
    image: "/assets/service4.png",
  },
  {
    badge: "Fast business websites",
    heading: "WordPress Websites",
    para: "We build WordPress websites that communicate clearly, load fast, and support lead generation. Each page is structured around credibility, conversion, and the actions you want visitors to take.",
    cta: "Explore WordPress",
    cta_link: "/services/wordpress-websites",
    image: "/assets/service5.png",
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
