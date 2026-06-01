import Image from "next/image";
import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";

const teamMembers = [
  {
    name: "Huziafa <br/> Maqsood",
    plainName: "Huziafa Maqsood",
    role: "Leading Marketer & Strategist",
    avatar: "/assets/person_1.png",
    linkedin: "https://www.linkedin.com/in/saith-huzaifa-0361a52b4/",
  },
  {
    name: "Shaheer <br/> Sheikh",
    plainName: "Shaheer Sheikh",
    role: "Founder & CEO Nexora Fixes",
    avatar: "/assets/person_2.png",
    linkedin: "#",
    featured: true,
  },
  {
    name: "Muhammad <br/> Ahmad",
    plainName: "Muhammad Ahmad",
    role: "Leading Software Engineer",
    avatar: "/assets/person_3.png",
    linkedin: "https://www.linkedin.com/in/ahmad-maqsood13/",
  },
  {
    name: "Abdul <br/> Raheem",
    plainName: "Abdul Raheem",
    role: "Visual Designer & Brand Artist",
    avatar: "/assets/person__4.png",
    linkedin: "#",
  },
];
export default function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-black py-10">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[70vw] -translate-x-1/2 rounded-full bg-radial from-primary-2/16 via-secondary/8 to-transparent blur-[110px]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
            <span>Meet Our Team</span>
          </div>

          <h2 className="display-h2 text-white">
            The people behind{" "} <br/>
            <span className="nexora-gradient-text">Nexora Fixes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl display-p2 text-white/62">
            A focused leadership team bringing strategy, marketing, and software
            execution together for cleaner digital growth.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`group relative overflow-hidden rounded-2xl border bg-white/[0.03] p-3 backdrop-blur-xl transition duration-500 hover:-translate-y-1 ${
                member.featured
                  ? "border-secondary/45 scale-105 shadow-[0_0_70px_rgba(255,122,0,0.16)] md:-mt-2"
                  : "border-primary-1/18"
              }`}
            >
              <div className="relative max-sm:min-h-[300px] overflow-hidden rounded-xl bg-bg-surface md:min-h-[220px] lg:min-h-[320px]">
                <Image
                  src={member.avatar}
                  alt={`${member.plainName} portrait placeholder`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <div className="px-2 pb-2 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="display-h6 text-white transition duration-500 group-hover:text-secondary"
                    dangerouslySetInnerHTML={{ __html: member.name }}
                  />
                  <Link
                    href={member.linkedin}
                    aria-label={`${member.plainName} LinkedIn profile`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-secondary/45 text-secondary transition hover:bg-secondary hover:text-black"
                  >
                    <TbBrandLinkedin className="h-5 w-5" />
                  </Link>
                </div>
                <p className="mt-2 text-sm font-medium text-white/58 transition duration-500 group-hover:text-white/82">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
