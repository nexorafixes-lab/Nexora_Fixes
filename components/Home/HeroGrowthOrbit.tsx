"use client";

import {
  TbBrandFacebookFilled,
  TbChartAreaLineFilled,
  TbDeviceDesktopAnalytics,
  TbPaletteFilled,
  TbShoppingCartFilled,
} from "react-icons/tb";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const growthOrbitData = [
  {
    id: 1,
    title: "Meta Ads",
    date: "Traffic",
    content:
      "High-intent traffic is the first growth lever. Strong Meta Ads put your offer in front of buyers who are ready to move.",
    category: "Acquisition",
    icon: TbBrandFacebookFilled,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 96,
    tags: ["Better ROAS", "Warm Leads", "Retargeting", "Fast Tests"],
  },
  {
    id: 2,
    title: "Creatives",
    date: "Hooks",
    content:
      "Creatives decide whether people stop, care, and click. Better hooks make every campaign easier to scale.",
    category: "Creative",
    icon: TbPaletteFilled,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 94,
    tags: ["Strong Hooks", "Better CTR", "Fresh Angles", "Ad Recall"],
  },
  {
    id: 3,
    title: "Websites",
    date: "CRO",
    content:
      "Your website turns attention into action. Clear pages, fast loading, and focused funnels protect every paid click.",
    category: "Conversion",
    icon: TbDeviceDesktopAnalytics,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 93,
    tags: ["Clean UI", "More Sales", "Fast Load", "Lead Flow"],
  },
  {
    id: 4,
    title: "Stores",
    date: "Revenue",
    content:
      "Stores matter because trust, product flow, and checkout quality directly shape revenue from every visitor.",
    category: "Commerce",
    icon: TbShoppingCartFilled,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 92,
    tags: ["Easy Checkout", "Trust Signals", "Cart Growth", "Repeat Sales"],
  },
  {
    id: 5,
    title: "Scale",
    date: "Growth",
    content:
      "Scaling is where winners separate. Reporting, testing, and custom systems keep growth repeatable.",
    category: "Systems",
    icon: TbChartAreaLineFilled,
    relatedIds: [1, 4],
    status: "pending" as const,
    energy: 91,
    tags: ["Reporting", "Testing Loop", "Scale Plan", "Clear KPIs"],
  },
];

export default function HeroGrowthOrbit() {
  return (
    <div className="relative max-sm:pb-5 mx-auto mt-10 flex w-full max-w-[640px] justify-center lg:mt-0">
      <RadialOrbitalTimeline timelineData={growthOrbitData} />
    </div>
  );
}
