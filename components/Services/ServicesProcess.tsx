import {
  Brush,
  ChartNoAxesCombined,
  Code2,
  Megaphone,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const services = [
  {
    title: "Meta Ads",
    icon: Megaphone,
    description:
      "High-intent campaigns built around offers, audiences, creative angles, retargeting, and reporting.",
  },
  {
    title: "Google Ads",
    icon: Search,
    description:
      "Search campaigns shaped around buyer intent, landing-page alignment, tracking, and budget control.",
  },
  {
    title: "Creatives Design",
    icon: Brush,
    description:
      "Scroll-stopping visuals, hooks, and campaign assets that make offers easier to trust and click.",
  },
  {
    title: "Custom Software",
    icon: Code2,
    description:
      "Dashboards, portals, booking flows, CRMs, and internal tools built around your real workflows.",
  },
  {
    title: "Shopify Store",
    icon: ShoppingCart,
    description:
      "Premium ecommerce stores with better product flow, trust signals, checkout clarity, and tracking.",
  },
  {
    title: "WordPress Websites",
    icon: ChartNoAxesCombined,
    description:
      "Fast business websites structured around credibility, conversion, and clear visitor actions.",
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
            <span>Everything We Handle</span>
          </div>
          <h2 className="display-h2 text-white">
            We Handle the Work.{" "} <br className="hidden md:block" />
            <span className="nexora-gradient-text">You Reap the Rewards</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl display-p2 text-white/62">
            Choose one service or connect them into a complete path from
            attention to conversion, revenue, and repeatable scale.
          </p>
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
