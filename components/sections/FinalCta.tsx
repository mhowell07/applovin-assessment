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
    <section style={{ backgroundColor: "#080345" }}>
      <div
        className="max-w-[1440px] mx-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("https://axon.ai/cta-background-large.jpg")' }}
      >
        <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[48px] md:py-[64px] lg:py-[80px]">
          <div className="grid gap-[40px]">
            <div className="block w-[90px] h-[24px] m-auto">
              <a href="/">
                <img
                  alt="Axon Logo"
                  loading="lazy"
                  width="90"
                  height="24"
                  decoding="async"
                  className="w-full h-auto"
                  style={{ color: "transparent" }}
                  src="https://cms-assets.axon.ai/logo_axon_applovin_5832d732e6/logo_axon_applovin_5832d732e6.svg"
                />
              </a>
            </div>
            <div className="grid gap-[16px] text-center">
              <h5 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500]">
                {headline}
              </h5>
              {subhead && (
                <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-[rgba(255,255,255,0.75)]">
                  {subhead}
                </p>
              )}
            </div>
            <div className="grid gap-[30px] text-center">
              <div className="min-w-max w-fit m-auto">
                <Button pageVariant={pageVariant} ctaLocation="final" variant="primary" size="2xl">
                  {cta}
                </Button>
              </div>
              <p className="m-0">
                Need support?{" "}
                <a className="text-[#68A7FF] font-semibold" href="/contact">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
