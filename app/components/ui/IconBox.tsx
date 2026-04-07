import React from "react";

type IconSize = "sm" | "md" | "lg";

interface IconBoxProps {
  icon: React.ReactNode;
  size?: IconSize;
  className?: string;
}

const sizeConfig: Record<IconSize, string> = {
  sm: "w-9 h-9",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export default function IconBox({
  icon,
  size = "md",
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={[
        "rounded-full flex items-center justify-center",
        "bg-[#0d1b2a] border border-[#1e3a5f]",
        sizeConfig[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon}
    </div>
  );
}

// Usage examples:
// <IconBox icon={<MyIcon />} />
// <IconBox icon={<MyIcon />} size="lg" />
// <IconBox icon={<MyIcon />} size="sm" className="opacity-80" />
