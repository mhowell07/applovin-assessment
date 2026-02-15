import { SectionWrapper } from "@/components/ui";

interface Metric {
  value: string;
  label: string;
}

interface PerformanceMetricsProps {
  heading?: string;
  metrics: Metric[];
}

export default function PerformanceMetrics({
  heading = "Results That Speak for Themselves",
  metrics,
}: PerformanceMetricsProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-border bg-surface p-8 text-center"
            >
              <span className="text-4xl font-bold text-gradient md:text-5xl">
                {metric.value}
              </span>
              <span className="mt-3 text-sm text-text-secondary">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
