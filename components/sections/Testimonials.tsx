"use client";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  headline: string;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="py-[48px] md:py-[64px] lg:py-[80px]">
      <div className="grid gap-[24px] min-[432px]:gap-[40px]">
        <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] w-full">
          <div className="flex justify-between items-center">
            <h3 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500]">
              What advertisers are saying
            </h3>
          </div>
        </div>

        <div
          className="flex justify-center overflow-hidden px-[24px] md:px-[48px]"
          style={{ cursor: "grab", touchAction: "pan-y", userSelect: "none" }}
        >
          <div
            className="flex flex-row gap-[24px]"
            style={{ width: "100%" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-[16px] p-[24px] rounded-[16px] bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.11)] w-[300px] sm:w-[357px] md:w-[384px] min-h-[280px] flex-shrink-0"
              >
                <div className="flex gap-[12px]">
                  <div className="flex-shrink-0">
                    <div className="w-[56px] h-[56px] rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center text-[20px] font-[600]">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div className="grid gap-[4px] my-auto flex-grow min-w-0">
                    <p className="text-[18px] truncate m-0">{t.name}</p>
                    <p className="text-[13px] leading-[18px] text-[rgba(255,255,255,0.53)] m-0">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[16px] flex-grow">
                  <p className="text-[18px] leading-[21.6px] break-words m-0">
                    {t.headline}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-full"
                    height="2"
                    viewBox="0 0 336 2"
                    fill="none"
                  >
                    <path
                      d="M0 1H336"
                      stroke="white"
                      strokeOpacity="0.09"
                    />
                  </svg>
                  <p className="text-[16px] leading-[24px] text-[rgba(255,255,255,0.75)] break-words flex-grow m-0">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
