import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

interface ServiceHeroProps {
  title: string;
  highlight: string;
  description: string;
  backgroundImage: string;
  ctaLabel?: string;
}

export default function ServiceHero({
  title,
  highlight,
  description,
  backgroundImage,
  ctaLabel = "Get Started Today",
}: ServiceHeroProps) {
  return (
    <section className="relative isolate grid min-h-[60vh] md:min-h-[90vh] items-start md:place-items-center overflow-hidden bg-black px-4 py-24 text-center">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="z-0 object-cover object-center opacity-[0.7]"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-2 bg-black/60" />
      <div className="absolute inset-0 z-2 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.10)_0%,rgba(0,0,0,0.44)_42%,rgba(0,0,0,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-5 h-26 bg-gradient-to-t from-black to-transparent" />

      <div className="container relative z-10 max-w-6xl flex flex-col items-start md:items-center">
        <h1 className="fade-in-bottom max-sm:text-start text-balance display-h1 text-[clamp(44px,7vw,104px)] font-medium leading-[0.96] tracking-normal text-white">
          {title} <span className="nexora-gradient-text"><br className="hidden md:inline" />{highlight}</span>
        </h1>

        <p className="mx-auto mt-7 max-w-4xl max-sm:text-start text-balance display-p1 leading-[1.8] text-white/82">
          {description}
        </p>

        <a
          href="#contact"
          className="group relative mt-9  inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-transform hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-tertiary via-primary-2 to-secondary" />
          <span className="relative flex h-full items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-white transition-colors group-hover:bg-transparent group-hover:text-black">
            {ctaLabel}
            <TbArrowUpRight className="h-5 w-5" />
          </span>
        </a>
      </div>
    </section>
  );
}
