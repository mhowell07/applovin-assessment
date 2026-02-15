"use client";

import { trackSignup, getSignupUrl } from "@/lib/analytics";

type Variant = "control" | "v1" | "v2";
type CtaLocation = "hero" | "footer" | "final";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary";
  size?: "md" | "2xl" | "header";
  pageVariant?: Variant;
  ctaLocation?: CtaLocation;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  pageVariant,
  ctaLocation,
  className = "",
}: ButtonProps) {
  const handleClick = () => {
    if (pageVariant && ctaLocation) {
      trackSignup(pageVariant, ctaLocation);
    }

    if (pageVariant) {
      window.location.href = getSignupUrl(pageVariant);
    }
  };

  const base =
    "inline-flex items-center justify-center rounded-[8px] font-[600] transition-all duration-200 cursor-pointer";

  const sizes = {
    md: "text-[14px] leading-[20px] px-[16px] py-[12px]",
    "2xl": "text-[18px] leading-[27px] px-[16px] py-[12px]",
    header: "text-[14px] leading-[20px] px-[12px] py-[4px]",
  };

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90",
    accent:
      "bg-[#002daf] text-white hover:bg-[#00248a]",
    secondary:
      "border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] bg-transparent hover:text-white hover:border-[rgba(255,255,255,0.3)]",
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
