import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ChevronUp, ChevronDown, PlayCircle, CheckCircle2 } from "lucide-react";

export const CurriculumSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <Badge>Course Curriculum</Badge>
        <h2 className="text-h2 font-medium text-center mb-20 max-w-3xl leading-[1.15]">
          Mastering Deep Work: A Structured Path to Peak Productivity
        </h2>

        <div className="w-full grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Module Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Active Module 1 */}
            <div className="border-b border-neutral-800 pb-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-body font-medium text-white">
                    Module 1: Foundations of Deep Work
                  </h4>
                  <p className="text-[12px] text-neutral-500">1.7h of video</p>
                </div>
                <ChevronUp className="w-5 h-5 text-neutral-400" />
              </div>

              {/* Lesson List */}
              <div className="flex flex-col gap-4 pl-2">
                {[
                  {
                    title: "Understanding Focus & Distraction",
                    time: "14:23",
                    preview: true,
                  },
                  { title: "The Science Behind Deep Work", time: "22:51" },
                  {
                    title: "Identifying Your Productivity Killers",
                    time: "34:42",
                  },
                  {
                    title: "How to Strengthen Your Attention Span",
                    time: "27:08",
                  },
                ].map((lesson, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <PlayCircle
                        className={`w-5 h-5 ${lesson.preview ? "text-primary-500" : "text-neutral-600"}`}
                      />
                      <span className="text-body-sm text-neutral-300 group-hover:text-white transition-colors">
                        {lesson.title}
                      </span>
                      {lesson.preview && (
                        <span className="text-[10px] bg-primary-500/10 text-primary-400 px-2 py-0.5 rounded border border-primary-500/20">
                          Preview
                        </span>
                      )}
                    </div>
                    <span className="text-body-sm text-neutral-500 font-mono">
                      {lesson.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsed Modules */}
            {[
              { id: 2, title: "Building Your Deep Work Routine", time: "1.3h" },
              { id: 3, title: "Eliminating Procrastination", time: "1.5h" },
              {
                id: 4,
                title: "Advanced Focus & Productivity Hacks",
                time: "1.2h",
              },
            ].map((mod) => (
              <div
                key={mod.id}
                className="flex justify-between items-center border-b border-neutral-800 pb-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <div>
                  <h4 className="text-body font-medium text-white">
                    Module {mod.id}: {mod.title}
                  </h4>
                  <p className="text-[12px] text-neutral-500">
                    {mod.time} of video
                  </p>
                </div>
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </div>
            ))}
          </div>

          {/* RIGHT: CTA Card */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-[32px] p-10 lg:sticky lg:top-24">
            <h3 className="text-h3 font-medium mb-8">
              Not only video lessons!
            </h3>

            <ul className="flex flex-col gap-6 mb-10">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers - Stay on track effortlessly.",
                "Live Q&As - Expert guidance & accountability.",
                "Exclusive Community - Connect with others.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5" />
                  <span className="text-body-sm text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              className="w-full py-6 text-lg rounded-2xl"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
