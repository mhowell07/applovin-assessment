import { SectionWrapper, Button } from "@/components/ui";

type Variant = "control" | "v1" | "v2";

interface FinalCtaProps {
  headline: string;
  subhead?: string;
  cta: string;
  pageVariant: Variant;
}

export default function FinalCta({
  headline,
  subhead,
  cta,
  pageVariant,
}: FinalCtaProps) {
  return (
    <SectionWrapper className="glow-purple">
      <div className="relative z-10 mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-12 text-center md:p-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {headline}
        </h2>

        {subhead && (
          <p className="mt-4 text-lg text-text-secondary">{subhead}</p>
        )}

        <div className="mt-8">
          <Button pageVariant={pageVariant} ctaLocation="final">
            {cta}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
