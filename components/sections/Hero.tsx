"use client";

import { Button } from "@/components/ui";

type Variant = "control" | "v1" | "v2";

interface HeroProps {
  headline: string;
  headlineGradient?: string;
  subhead: string;
  bullets?: string[];
  cta: string;
  pageVariant: Variant;
  videoSrc?: string;
}

export default function Hero({
  headline,
  headlineGradient,
  subhead,
  bullets,
  cta,
  pageVariant,
  videoSrc,
}: HeroProps) {
  return (
    <section className="w-full bg-black">
      <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[48px] md:py-[64px] lg:py-[80px]">
        <div className="md:max-w-[738px] lg:max-w-[800px] m-auto">
          <div className="grid gap-[40px]">
            <div className="grid gap-[40px]">
              <div className="grid gap-[16px]">
                <h1 className="my-0 text-[36px] leading-[39.6px] md:text-[56px] md:leading-[61.6px] lg:text-[64px] lg:leading-[70.4px] font-[500] text-center">
                  {headline}
                  {headlineGradient && (
                    <>
                      {" "}
                      <br />
                      <span className="bg-[linear-gradient(90deg,var(--items-primary,#FFF)_0%,var(--items-link,#68A7FF)_100%)] bg-clip-text text-transparent">
                        {headlineGradient}
                      </span>
                    </>
                  )}
                </h1>
                <p className="font-[500] text-[rgba(255,255,255,0.75)] text-center m-0 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]">
                  {subhead}
                </p>
              </div>

              {bullets && bullets.length > 0 && (
                <ul className="flex flex-col gap-[12px] text-left max-w-[600px] mx-auto">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-[12px] text-[rgba(255,255,255,0.75)] text-[16px] leading-[24px]">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#68A7FF]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <div className="min-w-max w-fit m-auto">
                <Button pageVariant={pageVariant} ctaLocation="hero" variant="accent" size="2xl">
                  {cta}
                </Button>
              </div>
            </div>

            {videoSrc && (
              <div className="max-w-[800px] w-full mx-auto">
                <div className="relative w-full aspect-video rounded-[16px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    className="w-full h-full object-cover border-2 border-[rgba(255,255,255,0.11)] rounded-[16px]"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
