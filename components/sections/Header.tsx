"use client";

import Image from "next/image";
import { Button } from "@/components/ui";

type Variant = "control" | "v1" | "v2";

interface HeaderProps {
  pageVariant: Variant;
}

export default function Header({ pageVariant }: HeaderProps) {
  return (
    <header className="text-white w-full bg-black z-20">
      <div className="max-w-[1296px] mx-auto px-[24px] md:px-[48px] py-[16px] flex justify-between items-center">
        <div className="block w-[90px] h-[20px]">
          <a href="/">
            <Image
              src="/logo-axon-applovin.svg"
              alt="Axon logo"
              width={90}
              height={20}
            />
          </a>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="hidden md:flex gap-[12px] items-center">
            <button className="px-[8px] py-[6px] text-[14px] text-white/70 transition-colors hover:text-white cursor-pointer bg-transparent border-0">
              Contact us
            </button>
            <span className="h-[16px] w-[1px] bg-white/15" />
          </div>
          <a
            href="https://ads.axon.ai/auth/signin"
            className="px-[8px] py-[6px] text-[14px] text-white/70 transition-colors hover:text-white no-underline"
          >
            Log in
          </a>
          <Button pageVariant={pageVariant} ctaLocation="hero" variant="primary" size="md">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
