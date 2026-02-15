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
        <div className={`m-auto ${pageVariant === "v1" || pageVariant === "v2" ? "max-w-[1000px]" : "md:max-w-[738px] lg:max-w-[800px]"}`}>
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
                <div className={`mx-auto ${pageVariant === "v1" ? "grid grid-cols-1 md:grid-cols-2 gap-[16px] max-w-[1000px]" : "flex flex-col gap-[12px] max-w-[600px]"}`}>
                  {bullets.map((bullet, i) => (
                    pageVariant === "v1" ? (
                      <div
                        key={i}
                        className="flex flex-col p-[20px] rounded-[12px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.11)]"
                      >
                        <div className="flex items-center gap-[12px] mb-[8px]">
                          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[rgba(104,167,255,0.15)]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#68A7FF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                        <p className="text-[rgba(255,255,255,0.9)] text-[15px] leading-[22px] m-0">
                          {bullet}
                        </p>
                      </div>
                    ) : (
                      <div key={i} className="flex items-start gap-[12px] text-[rgba(255,255,255,0.75)] text-[16px] leading-[24px]">
                        <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#68A7FF]" />
                        {bullet}
                      </div>
                    )
                  ))}
                </div>
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
