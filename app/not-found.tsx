import Link from "next/link";
import { TbArrowLeft, TbHome, TbSearchOff } from "react-icons/tb";

import DotField from "@/components/DotField";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col overflow-auto bg-background text-white">

      <main className="relative isolate grid min-h-screen flex-1 place-items-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
          <DotField
            dotRadius={1.7}
            dotSpacing={12}
            bulgeStrength={54}
            glowRadius={68}
            sparkle
            waveAmplitude={0}
            cursorRadius={260}
            cursorForce={0.08}
            bulgeOnly
            gradientFrom="rgba(255, 75, 0, 0.28)"
            gradientTo="rgba(255, 176, 0, 0.42)"
            glowColor="rgba(255, 106, 0, 0.7)"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.84)_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[360px] w-[min(760px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/10 blur-[100px]" />

        <section className="container relative z-10 mx-auto grid max-w-4xl justify-items-center text-center">
          <div className="mb-7 grid h-16 w-16 place-items-center rounded-2xl border border-primary-1/30 bg-black/60 text-secondary backdrop-blur-md">
            <TbSearchOff className="h-8 w-8" />
          </div>

          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Error 404
          </p>
          <h1 className="display-h2 max-w-3xl text-white">
            Sorry, we couldn&apos;t find the page you were looking for.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-2 md:text-lg">
            The page you are looking for does not exist, moved, or is currently
            unavailable. Let&apos;s get you back to Nexora Fixes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-transform hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-tertiary via-primary-2 to-secondary" />
              <span className="relative flex h-full items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-white transition-colors group-hover:bg-transparent">
                <TbHome className="h-5 w-5" />
                Back Home
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold text-white/80 transition hover:border-primary-1/45 hover:text-white"
            >
              <TbArrowLeft className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
