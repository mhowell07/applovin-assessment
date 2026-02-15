import { SectionWrapper } from "@/components/ui";

interface Feature {
  title: string;
  description: string;
}

interface ProductOverviewProps {
  heading?: string;
  features: Feature[];
}

export default function ProductOverview({
  heading = "Everything You Need to Scale",
  features,
}: ProductOverviewProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>

        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
