"use client";

import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  image: string;
  href?: string;
  className: string;
};

const projects: Project[] = [
  {
    title: "Glowsome",
    description:
      "Built a polished skincare website and managed Meta ads to improve discovery, trust, and customer acquisition.",
    image: "/assets/project_1.png",
    href: "https://glowsome.pk/",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "YSM Accountants",
    description:
      "Created a professional accounting website and designed campaign creatives to support trust, authority, and lead generation.",
    image: "/assets/project_2.png",
    href: "https://ysmaccountants.co.uk/",
    className: "md:col-span-1",
  },
  {
    title: "Orient AI Platform",
    description:
      "Designed a sleek modern website experience focused on positioning, smoother journeys, and stronger customer conversion outcomes.",
    image: "/assets/project_3.png",
    href: "https://do-tts.com/",
    className: "md:col-span-1",
  },
  {
    title: "Beyond Hut",
    description:
      "Built a custom job board tailored to their workflow, helping employers and candidates connect with ease.",
    image: "/assets/project_4.png",
    href: "https://beyondhut.com/",
    className: "md:col-span-1",
  },
  {
    title: "Zeno Tech",
    description:
      "Managed performance ads for a smart gadgets brand, improving ROI, efficiency, and key growth metrics profitably.",
    image: "/assets/project_5.png",
    href: "https://www.zenotech.pk/",
    className: "md:col-span-1",
  },
  {
    title: "GoldStone Clothing",
    description:
      "Managed paid ad campaigns for the clothing brand, increasing revenue through sharper targeting and optimization decisions.",
    image: "/assets/project_6.png",
    className: "md:col-span-1",
  },
];

const projectRows = [
  projects,
  [projects[3], projects[4], projects[5], projects[0], projects[1], projects[2]],
];

function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article
      style={{ height: "clamp(260px, 24vw, 280px)" }}
      className={cn(
        "group  relative w-[320px] shrink-0 overflow-hidden rounded-lg border border-secondary-2/15 bg-bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.36)] sm:w-[380px] lg:w-[430px]",
        "transition duration-500  hover:border-secondary/50 hover:shadow-[0_22px_80px_rgba(255,122,0,0.16)]"
      )}
    >
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        fill
        className="md:object-contain object-cover brightness-[0.62] contrast-105 transition duration-700 "
        sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 430px"
        priority={priority}
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-45% to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/4 bg-[linear-gradient(to_top,rgba(0,0,0,0.98),rgba(0,0,0,0.78)_44%,rgba(0,0,0,0.03)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">

        <div className="flex justify-start items-center gap-2 text-primary-1">
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-black leading-tight text-white transition hover:text-secondary md:text-3xl"
            >
              {project.title}
            </Link>
          ) : (
            <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
              {project.title}
            </h3>
          )}

        </div>
        <p className="mt-1 max-w-xl text-sm leading-6 text-white/70">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,154,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,154,0,0.07)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/20 via-secondary/10 to-transparent blur-[100px]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <div className="bg-black/20 shadow-inner shadow-secondary/30 border border-primary-1/20 backdrop-blur-sm mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/90">
            <span className="capitalize">Recent work</span>
          </div>
          <h2 className="display-h2 text-white">
            Projects Built To Turn <span className="nexora-gradient-text">Attention</span> Into <span className="nexora-gradient-text">Revenue</span>
          </h2>
          <p className="display-p2 mx-auto mt-4 max-w-2xl text-white/62">
            A snapshot of growth systems, ad funnels, websites, stores, and
            custom experiences shaped for measurable business outcomes.
          </p>
        </div>

        <div className="relative -mx-4 overflow-hidden py-4 sm:-mx-6 lg:-mx-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-black to-transparent sm:w-28 lg:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-black to-transparent sm:w-28 lg:w-40" />
          <div className="flex flex-col gap-1 lg:gap-2">
            {projectRows.map((row, rowIndex) => (
              <Marquee
                key={rowIndex}
                repeat={3}
                reverse={rowIndex !== 1}
                className="[--duration:42s] [--gap:1rem] lg:[--gap:1.25rem]"
              >
                {row.map((project, projectIndex) => (
                  <ProjectCard
                    key={`${rowIndex}-${project.title}`}
                    project={project}
                    priority={rowIndex === 0 && projectIndex < 2}
                  />
                ))}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
