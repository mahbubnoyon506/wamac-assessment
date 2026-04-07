interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "neutral" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 shadow-[0_0_20px_rgba(36,102,242,0.3)]",
    neutral:
      "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    ghost: "bg-transparent text-primary-500 hover:bg-primary-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-body-sm",
    md: "px-6 py-3 text-body",
    lg: "px-8 py-4 text-h5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
};
