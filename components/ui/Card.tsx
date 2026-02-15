interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-border bg-surface p-6
        ${hover ? "card-hover" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
