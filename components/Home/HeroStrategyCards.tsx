import {
  TbBrandFacebook,
  TbChartAreaLine,
  TbDeviceDesktop,
  TbRoute,
  TbShoppingBag,
  TbTargetArrow,
} from "react-icons/tb";

const strategyCards = [
  {
    title: "Traffic",
    label: "Meta Ads",
    detail: "Reach buyers already close to action.",
    icon: TbBrandFacebook,
    tags: ["Scale", "Retarget"],
  },
  {
    title: "Conversion",
    label: "Creatives",
    detail: "Turn attention into qualified leads.",
    icon: TbTargetArrow,
    tags: ["Hooks", "Offers"],
  },
  {
    title: "Revenue",
    label: "Stores",
    detail: "Shopify and WordPress built to sell.",
    icon: TbShoppingBag,
    tags: ["Checkout", "CRO"],
  },
  {
    title: "Systems",
    label: "Web Solutions",
    detail: "Custom platforms that support growth.",
    icon: TbDeviceDesktop,
    tags: ["Fast", "Scalable"],
  },
];

export default function HeroStrategyCards() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-[460px] md:mt-0">
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_24%,rgba(255,176,0,0.22),transparent_36%),radial-gradient(circle_at_50%_82%,rgba(255,75,0,0.18),transparent_34%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-primary-1/20 bg-black/35 p-5 shadow-[0_0_70px_rgba(255,75,0,0.13)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,122,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,0,0.08)_1px,transparent_1px)] bg-[size:22px_22px] opacity-45" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-secondary/70 to-transparent" />

        <div className="relative mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Growth Map
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-white">
              Strategy that moves numbers
            </h2>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/10 text-secondary shadow-[0_0_24px_rgba(255,176,0,0.18)]">
            <TbRoute className="h-6 w-6" />
          </div>
        </div>

        <div className="relative grid gap-4">
          {strategyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/8 bg-bg-surface/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-primary-1/35 hover:bg-bg-elevated/80"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-1/25 bg-black/40 text-primary-1 shadow-[0_0_22px_rgba(255,75,0,0.16)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -right-[1.45rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-secondary bg-background shadow-[0_0_14px_rgba(255,176,0,0.75)]" />
                </div>

                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-1">
                        {card.title}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {card.label}
                      </h3>
                    </div>
                    <span className="rounded-full border border-primary-1/20 bg-primary-1/10 px-2.5 py-1 text-xs font-semibold text-accent-1">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-text-2">{card.detail}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 rounded-2xl border border-secondary/25 bg-gradient-to-r from-primary-1/15 to-secondary/10 p-4">
          <div className="flex items-center gap-3">
            <TbChartAreaLine className="h-6 w-6 text-secondary" />
            <p className="text-sm font-semibold text-white">
              Ads, creatives, websites, and stores aligned to one result: more customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
