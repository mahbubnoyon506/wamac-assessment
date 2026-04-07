import { Moon, Sun } from "lucide-react";

export const StatusToggle = ({ status }: { status: "PENDING" | "DONE" }) => (
  <button className="relative w-14 h-8 rounded-full bg-neutral-800 border border-neutral-700 p-1 flex items-center transition-colors">
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
        status === "DONE"
          ? "translate-x-6 bg-primary-500"
          : "translate-x-0 bg-neutral-600"
      }`}
    >
      {status === "DONE" ? (
        <Sun className="w-3 h-3 text-white" />
      ) : (
        <Moon className="w-3 h-3 text-white" />
      )}
    </div>
  </button>
);
