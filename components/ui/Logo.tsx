interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 120, height = 32 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Axon.AI"
    >
      <text
        x="0"
        y="24"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        Axon
      </text>
      <text
        x="72"
        y="24"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="#8b5cf6"
        letterSpacing="-0.02em"
      >
        .AI
      </text>
    </svg>
  );
}
