"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const StatusToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-neutral-800 animate-pulse" />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label="Toggle Theme"
      className="relative w-14 h-8 rounded-full bg-neutral-800 dark:bg-neutral-900 border border-neutral-700 dark:border-neutral-800 p-1 flex items-center transition-all duration-300 hover:border-primary-500/50"
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
          isLight
            ? "translate-x-6 bg-primary-500 shadow-[0_0_10px_rgba(36,102,242,0.4)]"
            : "translate-x-0 bg-neutral-600"
        }`}
      >
        {isLight ? (
          <Sun className="w-3.5 h-3.5 text-white" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-white" />
        )}
      </div>
    </button>
  );
};
