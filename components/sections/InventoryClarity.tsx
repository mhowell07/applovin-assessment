import { SectionWrapper, Card } from "@/components/ui";

interface InventoryItem {
  channel: string;
  description: string;
  reach: string;
}

interface InventoryClarityProps {
  heading?: string;
  subhead?: string;
  items: InventoryItem[];
}

export default function InventoryClarity({
  heading = "Premium Inventory Across Every Channel",
  subhead = "Reach 1B+ users across mobile, web, and connected TV.",
  items,
}: InventoryClarityProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">{subhead}</p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Card key={i}>
              <div className="mb-3 inline-flex rounded-lg bg-primary-muted px-3 py-1">
                <span className="text-sm font-semibold text-primary">
                  {item.channel}
                </span>
              </div>
              <p className="mb-4 text-sm text-text-secondary">
                {item.description}
              </p>
              <p className="text-2xl font-bold text-gradient">{item.reach}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
