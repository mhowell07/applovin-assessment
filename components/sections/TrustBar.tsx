import { SectionWrapper } from "@/components/ui";

interface TrustBarProps {
  heading?: string;
  logos: string[];
}

export default function TrustBar({
  heading = "Trusted by leading brands",
  logos,
}: TrustBarProps) {
  return (
    <SectionWrapper className="py-12 lg:py-16">
      <div className="flex flex-col items-center gap-8">
        <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
          {heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name, i) => (
            <span
              key={i}
              className="text-lg font-semibold text-text-muted/60 transition-colors hover:text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
