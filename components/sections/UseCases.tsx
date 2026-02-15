import { SectionWrapper } from "@/components/ui";

interface UseCasesProps {
  heading?: string;
  items: string[];
}

export default function UseCases({
  heading = "Built For Performance Marketers",
  items,
}: UseCasesProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>

        <ul className="grid w-full max-w-3xl gap-4 md:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
            >
              <span className="mt-0.5 text-primary">✓</span>
              <span className="text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
