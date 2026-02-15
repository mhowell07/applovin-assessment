"use client";

import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
  illustration?: string;
}

interface ProcessProps {
  headline: string;
  subhead: string;
  steps: Step[];
}

export default function Process({ headline, subhead, steps }: ProcessProps) {
  return (
    <section>
      <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[64px] md:py-[80px] lg:py-[120px]">
        <div className="grid gap-[24px]">
          <div className="flex justify-between items-center">
            <h3 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] font-[500]">
              {headline}
            </h3>
          </div>
          <p className="font-[500] text-[rgba(255,255,255,0.53)] m-0 text-[16px] lg:text-[18px] max-w-[800px]">
            {subhead.split("Axon automatically targets")[0]}
            {subhead.includes("Axon automatically targets") && (
              <>
                <span className="text-white">
                  Axon automatically targets the right users and shows them the
                  ad most likely to drive a conversion.
                </span>{" "}
                No complex setup, no expertise needed.
              </>
            )}
            {!subhead.includes("Axon automatically targets") && subhead}
          </p>
        </div>
      </div>

      <div className="pb-[64px] md:pb-[84px] lg:pb-[120px]">
        <div className="flex justify-center overflow-hidden px-[24px] md:px-[48px]">
          <div
            className="flex flex-row gap-[24px]"
            style={{
              width: "100%",
              maxWidth: "min(100vw - 48px, calc(3 * (384px + 24px) - 24px))",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="w-[300px] min-[432px]:w-[384px] flex-shrink-0 h-full"
              >
                <div className="p-[24px] w-full h-full rounded-[16px] border border-[rgba(255,255,255,0.11)] m-0">
                  <div className="flex flex-col h-full gap-[24px]">
                    <div className="grid gap-[8px]">
                      <div className="text-[14px] text-[rgba(255,255,255,0.53)]">
                        {step.number}
                      </div>
                      <p className="m-0 text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                        {step.title}
                      </p>
                    </div>

                    {step.illustration && (
                      <div className="flex-grow w-full max-w-[280px] m-auto">
                        <div className="relative h-[200px] m-auto grid place-items-center">
                          <Image
                            alt=""
                            loading="lazy"
                            width={200}
                            height={200}
                            className="absolute inset-0 m-auto"
                            src={step.illustration}
                          />
                        </div>
                      </div>
                    )}

                    <p className="text-[14px] text-[rgba(255,255,255,0.53)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
