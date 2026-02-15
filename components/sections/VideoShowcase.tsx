interface VideoShowcaseProps {
  headline: string;
  videoSrc: string;
}

export default function VideoShowcase({
  headline,
  videoSrc,
}: VideoShowcaseProps) {
  return (
    <div className="py-[48px] md:py-[64px] lg:py-[80px]">
      <div className="grid gap-[24px] min-[432px]:gap-[40px]">
        <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] w-full">
          <div className="flex justify-between items-center">
            <h3 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500]">
              {headline}
            </h3>
          </div>
        </div>
        <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] w-full">
          <div className="w-full overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.11)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
