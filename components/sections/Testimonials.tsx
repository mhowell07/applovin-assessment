"use client";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  headline: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="py-[48px] md:py-[64px] lg:!py-[80px]">
      <div className="grid gap-6 min-[432px]:gap-[40px]">
        <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] w-full">
          <div className="flex justify-between items-center">
            <h3 className="m-0 text-[28px] leading-[30.8px] md:text-[36px] md:leading-[39.6px] lg:text-[48px] lg:leading-[52.8px] font-[500]">
              Axon in action
            </h3>
            <div className="gap-4 hidden min-[432px]:flex">
              <div className="p-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M3.8248 9.50005L8.7248 14.4C8.9248 14.6 9.02064 14.8334 9.01231 15.1C9.00397 15.3667 8.89981 15.6 8.69981 15.8C8.49981 15.9834 8.26647 16.0792 7.9998 16.0875C7.73314 16.0959 7.4998 16 7.2998 15.8L0.699805 9.20005C0.599805 9.10005 0.528971 8.99172 0.487305 8.87505C0.445638 8.75838 0.424805 8.63338 0.424805 8.50005C0.424805 8.36672 0.445638 8.24172 0.487305 8.12505C0.528971 8.00838 0.599805 7.90005 0.699805 7.80005L7.2998 1.20005C7.48314 1.01672 7.7123 0.925049 7.9873 0.925049C8.2623 0.925049 8.49981 1.01672 8.69981 1.20005C8.89981 1.40005 8.9998 1.63755 8.9998 1.91255C8.9998 2.18755 8.89981 2.42505 8.69981 2.62505L3.8248 7.50005H14.9998C15.2831 7.50005 15.5206 7.59588 15.7123 7.78755C15.904 7.97922 15.9998 8.21672 15.9998 8.50005C15.9998 8.78338 15.904 9.02088 15.7123 9.21255C15.5206 9.40422 15.2831 9.50005 14.9998 9.50005H3.8248Z" fill="white"></path>
                </svg>
              </div>
              <div className="p-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M12.175 9.50011H1C0.716667 9.50011 0.479167 9.40428 0.2875 9.21261C0.0958333 9.02094 0 8.78344 0 8.50011C0 8.21678 0.0958333 7.97928 0.2875 7.78761C0.479167 7.59594 0.716667 7.50011 1 7.50011H12.175L7.275 2.60011C7.075 2.40011 6.97917 2.16678 6.9875 1.90011C6.99583 1.63344 7.1 1.40011 7.3 1.20011C7.5 1.01678 7.73333 0.920943 8 0.912609C8.26667 0.904276 8.5 1.00011 8.7 1.20011L15.3 7.80011C15.4 7.90011 15.4708 8.00844 15.5125 8.12511C15.5542 8.24178 15.575 8.36678 15.575 8.50011C15.575 8.63344 15.5542 8.75844 15.5125 8.87511C15.4708 8.99178 15.4 9.10011 15.3 9.20011L8.7 15.8001C8.51667 15.9834 8.2875 16.0751 8.0125 16.0751C7.7375 16.0751 7.5 15.9834 7.3 15.8001C7.1 15.6001 7 15.3626 7 15.0876C7 14.8126 7.1 14.5751 7.3 14.3751L12.175 9.50011Z" fill="white"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center overflow-hidden px-[24px] md:px-[48px]"
          style={{ cursor: "grab", touchAction: "pan-y", userSelect: "none" }}
        >
          <div
            className="flex flex-row gap-[24px] transition-transform duration-500"
            style={{ width: "100%" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-[16px] p-[24px] rounded-[16px] bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.11)] w-[300px] sm:w-[357px] md:w-[384px] min-h-[280px] flex-shrink-0"
              >
                <div className="flex gap-[12px]">
                  <div className="flex-shrink-0">
                    <img
                      alt={t.name}
                      loading="lazy"
                      width="56"
                      height="56"
                      decoding="async"
                      className="w-[56px] h-[56px] rounded-full object-cover"
                      style={{ color: "transparent" }}
                      src={`/testimonials/${t.image}`}
                    />
                  </div>
                  <div className="grid gap-[4px] my-auto flex-grow min-w-0">
                    <p className="text-[18px] truncate m-0">{t.name}</p>
                    <p className="text-[13px] leading-[18px] text-[rgba(255,255,255,0.53)] m-0">
                      {t.role}{/* */},{/* */}{t.company}
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

        <div className="justify-end px-[24px] md:px-[48px] max-w-[1296px] mx-auto w-full flex min-[432px]:hidden">
          <div className="flex gap-4">
            <div className="p-2 cursor-pointer text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M3.8248 9.50005L8.7248 14.4C8.9248 14.6 9.02064 14.8334 9.01231 15.1C9.00397 15.3667 8.89981 15.6 8.69981 15.8C8.49981 15.9834 8.26647 16.0792 7.9998 16.0875C7.73314 16.0959 7.4998 16 7.2998 15.8L0.699805 9.20005C0.599805 9.10005 0.528971 8.99172 0.487305 8.87505C0.445638 8.75838 0.424805 8.63338 0.424805 8.50005C0.424805 8.36672 0.445638 8.24172 0.487305 8.12505C0.528971 8.00838 0.599805 7.90005 0.699805 7.80005L7.2998 1.20005C7.48314 1.01672 7.7123 0.925049 7.9873 0.925049C8.2623 0.925049 8.49981 1.01672 8.69981 1.20005C8.89981 1.40005 8.9998 1.63755 8.9998 1.91255C8.9998 2.18755 8.89981 2.42505 8.69981 2.62505L3.8248 7.50005H14.9998C15.2831 7.50005 15.5206 7.59588 15.7123 7.78755C15.904 7.97922 15.9998 8.21672 15.9998 8.50005C15.9998 8.78338 15.904 9.02088 15.7123 9.21255C15.5206 9.40422 15.2831 9.50005 14.9998 9.50005H3.8248Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="p-2 cursor-pointer text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M12.175 9.50011H1C0.716667 9.50011 0.479167 9.40428 0.2875 9.21261C0.0958333 9.02094 0 8.78344 0 8.50011C0 8.21678 0.0958333 7.97928 0.2875 7.78761C0.479167 7.59594 0.716667 7.50011 1 7.50011H12.175L7.275 2.60011C7.075 2.40011 6.97917 2.16678 6.9875 1.90011C6.99583 1.63344 7.1 1.40011 7.3 1.20011C7.5 1.01678 7.73333 0.920943 8 0.912609C8.26667 0.904276 8.5 1.00011 8.7 1.20011L15.3 7.80011C15.4 7.90011 15.4708 8.00844 15.5125 8.12511C15.5542 8.24178 15.575 8.36678 15.575 8.50011C15.575 8.63344 15.5542 8.75844 15.5125 8.87511C15.4708 8.99178 15.4 9.10011 15.3 9.20011L8.7 15.8001C8.51667 15.9834 8.2875 16.0751 8.0125 16.0751C7.7375 16.0751 7.5 15.9834 7.3 15.8001C7.1 15.6001 7 15.3626 7 15.0876C7 14.8126 7.1 14.5751 7.3 14.3751L12.175 9.50011Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
