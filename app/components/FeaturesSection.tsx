import { Badge } from "./ui/Badge";
import { Lightbulb, Target, CheckCircle2, Workflow } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <Workflow className="w-5 h-5 text-white" />,
    text: "Build lasting habits for long-term success.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <Badge>The Deep Work Blueprint</Badge>

        <h2 className="text-h2 font-medium text-center mb-20 max-w-2xl leading-[1.15]">
          A self-paced, results-driven course designed to help you
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-12">
          {/* Vertical Timeline Line */}
          {/* Uses a gradient to fade at the ends */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-primary-500/30 to-transparent" />

          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex items-center gap-10 group"
            >
              {/* Timeline Pip */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-neutral-950 border-2 border-primary-500 shadow-[0_0_10px_rgba(36,102,242,0.5)]" />

              <div className="flex flex-col items-start gap-4">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-inner group-hover:border-primary-500/50 transition-colors">
                  <div className="bg-neutral-800 p-2 rounded-full">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Text */}
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
