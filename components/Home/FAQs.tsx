"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const FAQS_DATA = [
  {
    q: "What services does your company provide?",
    a: "We provide virtual assistance, digital marketing, social media management, website and store development, SEO, content solutions, paid ads, strategic planning, accounts, finance, and sales growth support.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with national and international clients across different industries, creating customized solutions for each business size, market, goal, and stage of growth.",
  },
  {
    q: "How do you ensure confidentiality and data security?",
    a: "We handle client information with strict privacy standards, secure workflows, limited access, and careful communication so your business data stays protected throughout the project.",
  },
  {
    q: "Can I choose specific services instead of a full package?",
    a: "Absolutely. Our services are flexible and scalable, so you can choose one service, combine selected services, or build a custom package around your business needs.",
  },
  {
    q: "What platforms do you specialize in for web development?",
    a: "We work with Shopify, WooCommerce, WordPress, Magento, and Wix, building responsive websites and ecommerce stores focused on performance, usability, and conversion.",
  },
  {
    q: "How do your digital marketing campaigns work?",
    a: "We plan and manage paid and organic campaigns across Facebook, Instagram, TikTok, and Google Ads, then optimize targeting, creative, budget, and reporting for stronger ROI.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes. We provide ongoing support for websites, stores, apps, and campaigns, helping your systems stay updated, stable, secure, and performing at their best.",
  },
  {
    q: "How do you measure success for your clients?",
    a: "We track success through Google Analytics, Shopify reports, ad dashboards, sales data, and regular performance reports focused on ROI, growth, and measurable improvement.",
  },
  {
    q: "How quickly can you start working with a new client?",
    a: "We can usually begin within a few days after understanding your requirements, confirming goals, finalizing scope, and agreeing on the project timeline.",
  },
  {
    q: "Why should I choose your company over others?",
    a: "We combine professional expertise, global experience, and a results-driven approach to deliver practical solutions built for efficiency, scalability, and long-term business growth.",
  },
];

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

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden backdrop-blur-[2px] rounded-sm border transition-all duration-300",
        isOpen
          ? "border-secondary/35 bg-white/[0.06] shadow-[0_0_28px_rgba(255,176,0,0.08)]"
          : "border-secondary/16 bg-white/[0.025] hover:border-secondary/28 hover:bg-white/[0.045]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 p-4 text-left transition-all"
      >
        <span
          className={cn(
            "display-p2 font-semibold transition-colors",
            isOpen ? "text-white" : "text-white/78"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-secondary bg-secondary text-black"
              : "border-secondary/25 text-secondary"
          )}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-2">
              <div className="mb-4 h-px w-full bg-secondary/14" />
              <p className="display-p3 leading-relaxed text-white/62">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black py-16 ">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[82vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/14 via-secondary/7 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,white_18%,white_82%,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-1/8 to-secondary/5 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent_78%)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={[
              [7, 1],
              [8, 2],
              [10, 4],
              [12, 6],
              [5, 8],
              [14, 9],
            ]}
            className="absolute inset-0 h-full w-full fill-secondary/10 stroke-secondary/20 mix-blend-screen"
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
            Frequently Asked Questions
          </div>
          <h2
           
            className="display-h2 text-balance text-white"
          >
            Wondering How It Works? <br/> <span className="nexora-gradient-text">Here You Go.</span> 
          </h2>
          <p className="mx-auto mt-4 max-w-2xl display-p2 text-white/62">
           We know choosing the right agency is a big decision. Here are honest answers to the questions we get asked the most.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 text-left md:grid-cols-2">
          <div className="flex flex-col gap-2">
            {FAQS_DATA.slice(0, 5).map((faq, index) => (
              <FAQItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {FAQS_DATA.slice(5, 10).map((faq, index) => {
              const actualIndex = index + 5;

              return (
                <FAQItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openIndex === actualIndex}
                  onToggle={() => toggleItem(actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
