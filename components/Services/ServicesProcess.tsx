import {
  Brush,
  Calculator,
  Code2,
  Lightbulb,
  Megaphone,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const services = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Meta Ads, Instagram Ads, and TikTok Ads built around offers, audiences, creative angles, retargeting, and reporting.",
  },
  {
    title: "Website & E-Commerce",
    icon: ShoppingCart,
    description:
      "Conversion-focused websites and ecommerce stores designed to load fast, build trust, and guide visitors toward action.",
  },
  {
    title: "Graphic Design & Branding",
    icon: Brush,
    description:
      "Logos, brand systems, social creatives, campaign visuals, and design assets that make your business sharper and easier to remember.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    description:
      "Content planning, visuals, captions, scheduling, and performance review to keep your social channels active and aligned.",
  },
  {
    title: "SEO & Organic Growth",
    icon: Search,
    description:
      "Search visibility improved through SEO planning, on-page optimization, technical structure, and growth-focused content.",
  },
  {
    title: "Software Development",
    icon: Code2,
    description:
      "Dashboards, portals, CRMs, booking flows, and internal tools built around your real business workflows.",
  },
  {
    title: "Accounts & Finance",
    icon: Calculator,
    description:
      "Cleaner financial workflows, reporting structures, bookkeeping support, and account systems that make decisions easier.",
  },
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "Mobile and web apps shaped around usability, performance, and the features your customers or team actually need.",
  },
  {
    title: "Consultancy Services",
    icon: Lightbulb,
    description:
      "Strategic guidance for campaigns, funnels, platforms, systems, and growth decisions before you invest time or budget.",
  },
];

type Service = (typeof services)[number];

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares ? (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], index) => (
            <rect
              key={index}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
              strokeWidth="0"
            />
          ))}
        </svg>
      ) : null}
    </svg>
  );
}

function patternFor(index: number) {
  return Array.from({ length: 5 }, (_, itemIndex) => [
    7 + ((index + itemIndex) % 4),
    1 + ((index * 2 + itemIndex) % 6),
  ]);
}

function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className?: string;
}) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "relative min-h-[250px] overflow-hidden p-6 transition duration-300 hover:bg-white/[0.04] md:p-7",
        className
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-1/10 to-secondary/5 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={patternFor(index)}
            className="absolute inset-0 h-full w-full fill-secondary/10 stroke-secondary/20 mix-blend-screen"
          />
        </div>
      </div>

      <div className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-secondary/35 bg-black text-secondary">
        <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden />
      </div>

      <h3 className="relative z-10 mt-10 display-h6 text-white">
        {service.title}
      </h3>
      <p className="relative z-10 mt-3 display-p3 text-white/62">
        {service.description}
      </p>
    </article>
  );
}

export default function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-black py-10">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/16 via-secondary/8 to-transparent blur-[120px]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-dashed divide-secondary/18 overflow-hidden border border-dashed border-secondary/20 bg-white/[0.02] backdrop-blur-xl sm:grid-cols-2 sm:divide-x md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
