import Image from "next/image";
import { TbCheck } from "react-icons/tb";

interface ServiceWhyChooseProps {
  title: string;
  description: string;
  points: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function ServiceWhyChoose({
  title,
  description,
  points,
  imageSrc = "/assets/services/why__choose.png",
  imageAlt = "Nexora Fixes team planning a digital growth system",
}: ServiceWhyChooseProps) {
  return (
    <section className="relative isolate overflow-hidden bg-black py-12">
      

      <div className="relative overflow-hidden bg-gradient-to-br from-primary-1/80  to-secondary-2/80 text-black">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.34),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(0,0,0,0.18),transparent_36%)]" />

        <div className="container relative z-10 grid items-center gap-10 max-sm:pt-10 md:py-20 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/80 px-4 py-1 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
              <p className="text-lg font-bold display-p3 text-white/80 ">Choose Nexora</p>
            </div>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.04] tracking-normal text-black display-h3">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium leading-8 text-black/82 display-p2">
              {description}
            </p>

            <ul className="mt-3 grid gap-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm font-semibold leading-6 text-black/90 md:text-base"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-primary-2">
                    <TbCheck className="h-3 w-3" />
                  </span>
                  <span className="display-p2">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[837/517] md:min-h-[400px] min-h-[300px] w-full overflow-hidden rounded-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-contain object-center"
            />

          </div>
        </div>
      </div>

      
    </section>
  );
}
