export const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-xl ${className}`}
  >
    {/* Subtle Reflective Overlay */}
    <div className="absolute inset-0 bg-glow-reflect-lg opacity-10 pointer-events-none mix-blend-overlay" />

    <div className="relative z-10 p-8">{children}</div>
  </div>
);
