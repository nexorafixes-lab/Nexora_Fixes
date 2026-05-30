"use client";

import {
  TbBrush,
  TbChartAreaLineFilled,
  TbDeviceDesktopAnalytics,
  TbSpeakerphone,
  TbShoppingCartFilled,
} from "react-icons/tb";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const growthOrbitData = [
  {
    id: 1,
    title: "Web Development",
    date: "Build",
    content:
      "Fast, conversion-focused websites turn attention into action. We build clear pages, smooth funnels, and custom systems that support every growth channel.",
    category: "Development",
    icon: TbDeviceDesktopAnalytics,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 96,
    tags: ["Clean UI", "Fast Load", "Lead Flow", "Custom Builds"],
  },
  {
    id: 2,
    title: "Digital Marketing",
    date: "Traffic",
    content:
      "Digital marketing brings the right people to your offer. Paid campaigns, testing, retargeting, and reporting keep attention moving toward revenue.",
    category: "Acquisition",
    icon: TbSpeakerphone,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 94,
    tags: ["Paid Ads", "Better ROAS", "Retargeting", "Clear KPIs"],
  },
  {
    id: 3,
    title: "E-Commerce",
    date: "Revenue",
    content:
      "E-commerce growth depends on trust, product flow, and checkout clarity. We shape stores that help visitors browse, believe, and buy.",
    category: "Commerce",
    icon: TbShoppingCartFilled,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 93,
    tags: ["Shopify", "Easy Checkout", "Trust Signals", "More Sales"],
  },
  {
    id: 4,
    title: "Branding",
    date: "Identity",
    content:
      "Designing and branding make your business easier to notice, trust, and remember. Strong visuals give every campaign and website a sharper edge.",
    category: "Designing & Branding",
    icon: TbBrush,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 92,
    tags: ["Brand Look", "Visual Systems", "Creatives", "Better Recall"],
  },
  {
    id: 5,
    title: "Scaling",
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
