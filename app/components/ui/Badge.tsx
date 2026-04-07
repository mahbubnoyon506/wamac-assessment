type DotColor = "blue" | "green" | "amber" | "red" | "purple";

interface BadgeProps {
  label: string;
  dot?: DotColor;
  className?: string;
}

const dotColors: Record<DotColor, string> = {
  blue: "bg-[#4a9eff]",
  green: "bg-[#34d399]",
  amber: "bg-[#f59e0b]",
  red: "bg-[#f87171]",
  purple: "bg-[#a78bfa]",
};

export default function Badge({
  label,
  dot = "blue",
  className = "",
}: BadgeProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-1.75",
        "bg-[#1a2535] border border-[#2a3a52]",
        "rounded-full px-4 py-1.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={["w-1.75 h-1.75 rounded-full shrink-0", dotColors[dot]].join(
          " ",
        )}
      />
      <span className="text-[13px] text-[#e2e8f0] font-normal whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
