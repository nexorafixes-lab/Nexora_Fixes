import { TbFlag, TbTargetArrow, TbWorld } from "react-icons/tb";

import { InteractiveGlobe } from "@/components/ui/interactive-globe";

const principles = [
  {
    title: "Mission",
    icon: TbTargetArrow,
    text: "Build digital systems that turn attention into measurable revenue through sharper ads, cleaner websites, and growth-focused execution.",
  },
  {
    title: "Vision",
    icon: TbWorld,
    text: "Help ambitious brands scale with connected strategy, creative, commerce, and software that work together instead of living in silos.",
  },
  {
    title: "Values",
    icon: TbFlag,
    text: "Clarity, speed, ownership, and honest performance thinking guide how we plan, build, test, and improve every project.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-visible bg-black py-10">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary-1/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-20 h-[260px] w-[420px] rounded-full bg-secondary/10 blur-[110px]" />

      <div className="container relative z-10 grid items-center gap-10 lg:min-h-[130vh] lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-14">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
            <span>Mission, Vision, Values</span>
          </div>

          <h2 className="display-h2 text-white">
            Growth needs more than services.{" "}
            <span className="nexora-gradient-text">It needs direction.</span>
          </h2>

          <p className="mt-4 max-w-xl display-p2 text-white/62">
            Nexora Fixes is built around practical growth thinking: clear
            strategy, polished execution, and systems that make the next move
            easier to measure.
          </p>

          <div className="mt-8 grid gap-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid grid-cols-[48px_1fr] gap-4 border border-primary-1/18 bg-white/[0.03] p-5 backdrop-blur-md"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-secondary/35 bg-black text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="display-h6 text-white">{item.title}</h3>
                    <p className="mt-2 display-p3 text-white/62">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-[520px] place-items-center lg:sticky lg:top-8 lg:self-start">
          <div className="pointer-events-none absolute inset-4 rounded-full border border-primary-1/12 bg-[radial-gradient(circle,rgba(255,122,0,0.08),rgba(0,0,0,0)_65%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.12),rgba(255,75,0,0.04)_42%,transparent_68%)] blur-2xl" />
          <InteractiveGlobe
            size={520}
            className="relative z-10 max-h-[min(78vw,520px)] max-w-[min(78vw,520px)]"
            dotColor="rgba(255, 176, 0, ALPHA)"
            arcColor="rgba(255, 75, 0, 0.48)"
            markerColor="rgba(255, 194, 71, 1)"
            autoRotateSpeed={0.0018}
          />
        </div>
      </div>
    </section>
  );
}
