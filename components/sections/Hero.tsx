import { SectionWrapper, Button } from "@/components/ui";

type Variant = "control" | "v1" | "v2";

interface HeroProps {
  headline: string;
  subhead: string;
  bullets?: string[];
  cta: string;
  pageVariant: Variant;
}

export default function Hero({
  headline,
  subhead,
  bullets,
  cta,
  pageVariant,
}: HeroProps) {
  return (
    <SectionWrapper className="glow-purple pt-32 lg:pt-40">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          {subhead}
        </p>

        {bullets && bullets.length > 0 && (
          <ul className="mt-8 flex flex-col gap-3 text-left">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button pageVariant={pageVariant} ctaLocation="hero">
            {cta}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
