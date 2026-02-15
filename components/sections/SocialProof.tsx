import { SectionWrapper } from "@/components/ui";

interface SocialProofProps {
  heading?: string;
  logos: string[];
}

export default function SocialProof({
  heading = "Trusted by the World's Top Advertisers",
  logos,
}: SocialProofProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-5 transition-colors hover:border-primary/30"
            >
              <span className="text-base font-semibold text-text-secondary">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
