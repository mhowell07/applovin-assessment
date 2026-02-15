import { SectionWrapper, Card } from "@/components/ui";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  heading?: string;
  steps: Step[];
}

export default function HowItWorks({
  heading = "How It Works",
  steps,
}: HowItWorksProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Card key={i} className="relative text-center">
              <span className="mb-4 inline-block text-3xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
