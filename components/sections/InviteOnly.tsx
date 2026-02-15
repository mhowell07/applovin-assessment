"use client";

import Image from "next/image";

interface BrandLogo {
  src: string;
  alt: string;
  width: number;
}

interface InviteOnlyProps {
  headline: string;
  headlineGradient: string;
  descriptionBold: string;
  description: string;
  videoSrc: string;
  brandLogos: BrandLogo[];
}

export default function InviteOnly({
  headline,
  headlineGradient,
  descriptionBold,
  description,
  videoSrc,
  brandLogos,
}: InviteOnlyProps) {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <section>
      <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[64px] md:py-[80px] lg:py-[120px]">
        <div className="grid grid-cols-1 gap-y-[48px] md:gap-y-[64px] lg:gap-y-[80px]">
          <div className="grid gap-[48px] md:gap-[64px] lg:gap-[80px]">
            <div className="md:max-w-[738px] lg:max-w-[800px] m-auto">
              <div className="grid gap-[16px]">
                <h2 className="my-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500] text-center">
                  {headline}{" "}
                  <br />
                  <span className="bg-[linear-gradient(90deg,var(--items-primary,#FFF)_0%,var(--items-link,#68A7FF)_100%)] bg-clip-text text-transparent">
                    {headlineGradient}
                  </span>
                </h2>
                <p className="font-[500] text-[rgba(255,255,255,0.53)] text-center m-0 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]">
                  <span className="text-white">{descriptionBold}</span>{" "}
                  {description}
                </p>
              </div>
            </div>
            <div className="max-w-[1200px] w-full mx-auto">
              <video
                className="w-full h-auto rounded-[16px] object-contain"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div
            className="relative flex overflow-hidden mx-auto"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            }}
          >
            <div className="flex items-center justify-start animate-marquee">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: "16.666666666666668%" }}
                >
                  <Image
                    alt={logo.alt}
                    loading="lazy"
                    width={logo.width}
                    height={60}
                    className="block mx-auto h-auto"
                    style={{ width: `${logo.width}px` }}
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
