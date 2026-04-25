import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}
