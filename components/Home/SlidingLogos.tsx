import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

const clientLogos = Array.from({ length: 9 }, (_, index) => ({
  name: `Company ${index + 1}`,
  src: `/assets/companies/company_${index + 1}.png`,
}));

function ClientLogo({ client }: { client: (typeof clientLogos)[number] }) {
  return (
    <div className="group/logo mx-5 inline-flex h-20 w-[212px] shrink-0 cursor-pointer items-center justify-center rounded-xl px-4 transition duration-300 hover:bg-white/[0.03] sm:h-24 sm:w-[254px]">
      <Image
        src={client.src}
        alt={`${client.name} logo`}
        width={954}
        height={360}
        className="h-auto w-full object-contain opacity-65 grayscale transition duration-500 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
      />
    </div>
  );
}

export default function SlidingLogos() {
  return (
    <section className="relative overflow-hidden bg-black py-6 pb-22">
      <div className="container relative">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover repeat={2} className="[--duration:32s]">
            {clientLogos.map((client) => (
              <ClientLogo key={client.src} client={client} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
