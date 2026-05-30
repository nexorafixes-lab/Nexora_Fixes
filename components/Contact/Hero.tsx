import DotField from "@/components/DotField";

interface HeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

function Hero({ badge, title, highlight, description }: HeroProps) {
  return (
    <section className="hero-bg relative isolate grid min-h-[90vh] place-items-center overflow-hidden bg-black py-10">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-100 md:opacity-70">
        <DotField
          dotRadius={1.8}
          dotSpacing={10}
          bulgeStrength={60}
          glowRadius={70}
          sparkle
          waveAmplitude={0}
          cursorRadius={280}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(255, 75, 0, 0.42)"
          gradientTo="rgba(255, 176, 0, 0.46)"
          glowColor="rgba(255, 106, 0, 0.78)"
          mobileFallback={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_62%,rgba(0,0,0,0.4)_82%,rgba(0,0,0,0.84)_100%)] md:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_42%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.92)_100%)]" />
      <div className="block md:hidden pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black via-black/70 to-transparent md:h-52" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-black via-black/70 to-transparent md:h-22" />

      <div className="container relative z-10  grid max-w-4xl justify-items-start md:justify-items-center  md:text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-1/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-inner shadow-secondary/30 backdrop-blur-sm">
          <span className="capitalize">{badge}</span>
        </div>

        <h1 className="display-h1 fade-in-top max-w-5xl font-semibold! leading-[0.96] tracking-normal text-white">
          {title} <span className="nexora-gradient-text">{highlight}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance display-p1 leading-[1.7] text-text-2">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Hero;
