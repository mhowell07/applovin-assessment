"use client";

import { Button } from "@/components/ui";

type Variant = "control" | "v1" | "v2";

interface ReferralProps {
  headline: string;
  description: string;
  cta: string;
  pageVariant: Variant;
}

export default function Referral({
  headline,
  description,
  cta,
  pageVariant,
}: ReferralProps) {
  return (
    <section>
      <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[48px] md:py-[64px] lg:py-[80px]">
        <div
          className="flex flex-col md:flex-row gap-[24px] rounded-[16px] justify-between md:items-center p-[32px]"
          style={{
            backgroundImage: 'url("https://axon.ai/cta-background-small.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="grid gap-[4px]">
            <h5 className="m-0 text-[28px] leading-[30.8px] font-semibold text-white font-medium">
              {headline}
            </h5>
            <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-white">
              {description}
            </p>
          </div>
          <div className="min-w-max">
            <Button
              pageVariant={pageVariant}
              ctaLocation="footer"
              variant="primary"
              size="2xl"
            >
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
