"use client";

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
        <div className="grid gap-[16px]">
          <div className="flex justify-between items-center">
            <h3 className="m-0 text-[24px] leading-[26.4px] md:text-[28px] md:leading-[30.8px] font-semibold">
              {headline}
            </h3>
          </div>
          <p className="font-medium text-[rgba(255,255,255,0.53)] m-0 text-[16px] lg:text-[18px] max-w-[680px]">
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

      <div className="grid gap-6 min-[432px]:gap-0 pb-[64px] md:pb-[84px] lg:pb-[120px]">
        <div
          className="flex justify-center overflow-hidden pl-0 min-[744px]:pl-12 min-[1296px]:pl-0"
          style={{ cursor: "grab" }}
        >
          <div
            className="flex flex-row gap-6 transition-transform duration-500"
            id="cards-container"
            style={{
              width: "100%",
              maxWidth: "min(calc(-48px + 100vw), 1200px)",
            }}
          >
            {/* Card 1 */}
            <div className="w-[300px] min-[432px]:w-[384px] flex-shrink-0 h-full">
              <div
                className="p-[16px] w-full h-full rounded-[16px] border border-[rgba(255,255,255,0.11)] m-0 bg-[rgba(255,255,255,0.02)]"
                style={{
                  backgroundImage: 'url("https://5209470.fs1.hubspotusercontent-na1.net/hubfs/5209470/Axon/img-card3-default.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="flex flex-col h-full gap-[16px]">
                  <div className="grid gap-[4px]">
                    <div className="text-[14px] text-[rgba(255,255,255,0.53)]">
                      Step 1
                    </div>
                    <p className="m-0 text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                      Install the Axon Pixel
                    </p>
                  </div>
                  <div className="flex-grow w-full max-w-[280px] m-auto">
                    <div className="relative h-[200px] w-full">
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-10"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-1/illo-card1-box-bg.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="48"
                        height="48"
                        decoding="async"
                        className="absolute inset-0 m-auto z-20"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-1/pixel-behind.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-20"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-1/illo-card1-pixel.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-1/illo-card1-box-top.svg"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] text-[rgba(255,255,255,0.53)]">
                    Integrate the Axon Pixel through Shopify App Store or Google
                    Tag Manager to get started.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[300px] min-[432px]:w-[384px] flex-shrink-0 h-full">
              <div
                className="p-[16px] w-full h-full rounded-[16px] border border-[rgba(255,255,255,0.11)] m-0 bg-[rgba(255,255,255,0.02)]"
                style={{
                  backgroundImage: 'url("https://5209470.fs1.hubspotusercontent-na1.net/hubfs/5209470/Axon/img-card3-default.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="flex flex-col h-full gap-[16px]">
                  <div className="grid gap-[4px]">
                    <div className="text-[14px] text-[rgba(255,255,255,0.53)]">
                      Step 2
                    </div>
                    <p className="m-0 text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                      Set up your campaign
                    </p>
                  </div>
                  <div className="flex-grow w-full max-w-[280px] m-auto">
                    <div className="relative h-[200px] w-full">
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-20"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-folder-back.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-file-bottom.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-[31]"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-file-middle.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-[32]"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-file-top.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-[33]"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-folder-front.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="237"
                        height="132"
                        decoding="async"
                        className="absolute inset-0 m-auto z-[34]"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-cpp.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="237"
                        height="132"
                        decoding="async"
                        className="absolute inset-0 m-auto z-[35]"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-2/illo-card2-roas.svg"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] text-[rgba(255,255,255,0.53)]">
                    Upload your brand assets and set your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[300px] min-[432px]:w-[384px] flex-shrink-0 h-full">
              <div
                className="p-[16px] w-full h-full rounded-[16px] border border-[rgba(255,255,255,0.11)] m-0 bg-[rgba(255,255,255,0.02)]"
                style={{
                  backgroundImage: 'url("https://5209470.fs1.hubspotusercontent-na1.net/hubfs/5209470/Axon/img-card3-default.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="flex flex-col h-full gap-[16px]">
                  <div className="grid gap-[4px]">
                    <div className="text-[14px] text-[rgba(255,255,255,0.53)]">
                      Step 3
                    </div>
                    <p className="m-0 text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                      Let Axon do the work
                    </p>
                  </div>
                  <div className="flex-grow w-full max-w-[320px] m-auto">
                    <div className="relative h-[200px] w-full">
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        className="absolute inset-0 m-auto z-20"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-3/illo-card3-logo.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="38"
                        height="38"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-3/illo-card3-user-md.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="26"
                        height="26"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent" }}
                        src="/animated-cards/card-3/illo-card3-user-sm.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="43"
                        height="43"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent", opacity: 0 }}
                        src="/animated-cards/card-3/illo-card3-user-lg.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="26"
                        height="26"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent", opacity: 0 }}
                        src="/animated-cards/card-3/illo-card3-user-sm.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="52"
                        height="52"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent", opacity: 0 }}
                        src="/animated-cards/card-3/illo-card3-user-xl.svg"
                      />
                      <img
                        alt=""
                        loading="lazy"
                        width="52"
                        height="52"
                        decoding="async"
                        className="absolute inset-0 m-auto z-30"
                        style={{ color: "transparent", opacity: 0 }}
                        src="/animated-cards/card-3/illo-card3-user-xl.svg"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] text-[rgba(255,255,255,0.53)]">
                    Axon automatically targets the right user and shows them the
                    ad most likely to drive a conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
