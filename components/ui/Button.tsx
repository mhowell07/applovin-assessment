"use client";

import { trackSignup, getSignupUrl } from "@/lib/analytics";

type Variant = "control" | "v1" | "v2";
type CtaLocation = "hero" | "footer" | "final";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  pageVariant?: Variant;
  ctaLocation?: CtaLocation;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
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
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer text-base px-8 py-3";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/30",
    secondary:
      "border border-border-light text-foreground hover:bg-surface-raised hover:border-primary/50",
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
