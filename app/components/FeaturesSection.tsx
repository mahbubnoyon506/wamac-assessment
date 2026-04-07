import Badge from "./ui/Badge";
import {
  Lightbulb,
  Target,
  CheckCircle2,
  BrainIcon,
  BadgeCheck,
} from "lucide-react";
import IconBox from "./ui/IconBox";
import CheckIcon from "./ui/CheckIcon";

const WorkFlow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M14.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4 8.5A4.5 4.5 0 0 1 8.5 4H12a1 1 0 1 1 0 2H8.5a2.5 2.5 0 0 0 0 5h7a4.5 4.5 0 1 1 0 9H12a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 0-5h-7A4.5 4.5 0 0 1 4 8.5"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const features = [
  {
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <BrainIcon className="w-5 h-5 text-white" />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <CheckIcon />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <WorkFlow />,
    text: "Build lasting habits for long-term success.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-background py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <Badge label="The Deep Work Blueprint" />

        <h2 className="text-h2 font-medium text-center mb-20 max-w-150 leading-[1.15]">
          A self-paced, results-driven course designed to help you
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-12">
          {/* Vertical Timeline Line */}
          {/* Uses a gradient to fade at the ends */}
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-linear-to-b from-transparent via-primary-500/30 to-transparent" />

          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex items-center gap-10 group"
            >
              <div className="relative z-10 w-4 h-4 rounded-full bg-primary-500 border-2 border-primary-500 shadow-[0_0_10px_rgba(36,102,242,0.5)]" />

              <div className="flex flex-col items-start gap-4">
                <IconBox icon={feature.icon} size="lg" />

                <p className="text-body text-neutral-400 max-w-[320px] leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
