import Image from "next/image";
import Badge from "./ui/Badge";
import { Button } from "./ui/Button";

export const HeroSection = () => {
  return (
    <section className="bg-background relative pt-32 pb-12 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-fade pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 bg-hero-texture pointer-events-none" />

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Discount Badge */}
        <Badge label="30% off until 4d : 2h : 41m : 17s" className="mb-3" />

        {/* Heading 1 (Regular, 52px, 115% LH) */}
        <h1 className="max-w-180 mx-auto text-h1 font-regular mb-6 tracking-tight">
          Master Focus & Get More Done in Less Time
        </h1>

        {/* Body Normal (Regular, 17px, 135% LH) */}
        <p className="max-w-145 mx-auto text-neutral-400 text-body mb-10">
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <Button variant="primary">Enroll now</Button>
          <Button variant="neutral">Curriculum</Button>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="relative max-w-230 mx-auto group">
          {/* Subtle Video container border/shadow */}
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            {/* Aspect Ratio Box */}
            <div className="relative aspect-video">
              <Image
                src="/assets/images/hero-image.png"
                alt="PPA Course Introduction Video"
                fill
                className="object-cover"
              />

              {/* Central Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-glow-primary transform transition-transform group-hover:scale-110">
                  <PlayIcon className="w-10 h-10 text-primary-500 fill-primary-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Play Icon Component for demonstration
const PlayIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);
