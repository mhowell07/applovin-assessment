"use client";

import { Button } from "@/components/ui";

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
    <section className="w-full bg-black py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1296px] px-[24px] md:px-[48px]">
        <div className="mx-auto max-w-[800px] rounded-[24px] border border-[rgba(255,255,255,0.11)] bg-[rgba(255,255,255,0.05)] p-[40px] md:p-[60px] text-center">
          <h2 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] font-[500] text-white">
            {headline}
          </h2>

          {subhead && (
            <p className="mt-[16px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-[rgba(255,255,255,0.75)]">
              {subhead}
            </p>
          )}

          <div className="mt-[32px]">
            <Button pageVariant={pageVariant} ctaLocation="final" variant="accent" size="2xl">
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
