interface AttentionProps {
  headline: string;
  description: string;
  descriptionBold: string;
  videoSrc: string;
}

export default function Attention({
  headline,
  description,
  descriptionBold,
  videoSrc,
}: AttentionProps) {
  return (
    <section className="w-full bg-black py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1296px] px-[24px] md:px-[48px]">
        <div className="flex flex-col items-center gap-[48px] lg:flex-row lg:gap-[64px]">
          <div className="flex-1">
            <h3 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500] text-white">
              {headline}
            </h3>
            <p className="mt-[24px] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] text-[rgba(255,255,255,0.53)]">
              <span className="text-white">{descriptionBold}</span>{" "}
              {description}
            </p>
          </div>
          <div className="flex-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-[16px] object-cover border-2 border-[rgba(255,255,255,0.11)]"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
