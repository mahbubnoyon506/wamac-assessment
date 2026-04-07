export const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700">
    <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_#2466F2]" />
    <span className="text-body-sm font-medium text-neutral-200">
      {children}
    </span>
  </div>
);
