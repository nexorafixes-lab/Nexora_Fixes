import {
  TbBrain,
  TbBriefcaseFilled,
  TbChartAreaLineFilled,
  TbCoinRupeeFilled,
  TbDiamondsFilled,
  TbPackage,
  TbReceiptRupeeFilled,
  TbScale,
  TbShoppingCartFilled,
  TbTruckDelivery,
} from "react-icons/tb";

import { Marquee } from "@/components/ui/marquee";

const clientLogos = [
  {
    name: "GoldStone",
    icon: TbDiamondsFilled,
  },
  {
    name: "YSM Accountants",
    icon: TbReceiptRupeeFilled,
  },
  {
    name: "Orient AI",
    icon: TbBrain,
  },
  {
    name: "LedgerPeak",
    icon: TbChartAreaLineFilled,
  },
  {
    name: "MiraCart",
    icon: TbShoppingCartFilled,
  },
  {
    name: "Harbor & Co.",
    icon: TbBriefcaseFilled,
  },
  {
    name: "RupeeNest",
    icon: TbCoinRupeeFilled,
  },
  {
    name: "Urban Loom",
    icon: TbPackage,
  },
  {
    name: "NexaLedger",
    icon: TbScale,
  },
  {
    name: "ParcelMint",
    icon: TbTruckDelivery,
  },
];

function ClientLogo({
  client,
}: {
  client: (typeof clientLogos)[number];
}) {
  const Icon = client.icon;

  return (
    <div className="group/logo mx-4 inline-flex h-20 min-w-max cursor-pointer items-center gap-1 rounded-full px-6 text-white/45 transition duration-300 hover:text-white">
      <Icon className="h-7 w-7 shrink-0 transition duration-300 group-hover/logo:text-secondary" />
      <span className="font-sans text-[22px] font-semibold leading-tight tracking-wide transition duration-300 group-hover/logo:bg-gradient-to-r group-hover/logo:from-primary-2 group-hover/logo:to-secondary-1 group-hover/logo:bg-clip-text group-hover/logo:text-transparent">
        {client.name}
      </span>
    </div>
  );
}

export default function SlidingLogos() {
  return (
    <section className="relative overflow-hidden bg-black pb-14">
      <div className="pointer-events-none absolute inset-0 " />
      <div className="container relative">
        

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover repeat={2} className="[--duration:32s]">
            {clientLogos.map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
