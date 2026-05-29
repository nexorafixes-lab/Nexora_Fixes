"use client";

import ServicesCards from "./ServicesCards";
import { Wrench } from "lucide-react";

function Services() {
  return (
    <section id="services" className="relative mt-30">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full max-h-[400vh] w-full max-w-[60vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/20 to-secondary-2/10 blur-[100px]" />

      <div className="container relative z-10 mb-16 md:mb-7 flex max-w-[1080px] flex-col items-center gap-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
          <span className="capitalize">Growth services built for measurable wins</span>
        </div>

        <h2
          className="display-h2 max-w-4xl text-center text-white"
        >
          Everything From <span className="nexora-gradient-text">Ads to Ecommerce</span> , Done Right.
        </h2>

        <p className="display-p2 max-w-2xl text-white/60">
          We connect ads, creatives, websites, stores, and custom systems so every
          click has a clearer path to leads, sales, and repeatable revenue.
        </p>
      </div>

      <ServicesCards />
    </section>
  );
}

export default Services;
