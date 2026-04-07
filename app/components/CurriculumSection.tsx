"use client";

import React, { useState } from "react";
import Badge from "./ui/Badge";
import { Button } from "./ui/Button";
import { ChevronUp, ChevronDown, Play, BadgeCheck } from "lucide-react";
import ArrowDown from "./ui/ArrowDown";

const curriculumData = [
  {
    id: 1,
    title: "Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
      },
      { title: "The Science Behind Deep Work", time: "22:51", preview: false },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        preview: false,
      },
    ],
  },
  {
    id: 2,
    title: "Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      { title: "Setting Up Your Environment", time: "18:12", preview: false },
      { title: "The 4 Rites of Deep Work", time: "25:04", preview: false },
    ],
  },
  {
    id: 3,
    title: "Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      { title: "The Procrastination Loop", time: "20:15", preview: false },
      { title: "Instant Action Techniques", time: "15:40", preview: false },
    ],
  },
  {
    id: 4,
    title: "Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Biometric Productivity Tracking",
        time: "30:10",
        preview: false,
      },
      { title: "Deep Recovery Systems", time: "22:05", preview: false },
    ],
  },
];

export const CurriculumSection = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="bg-background py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <Badge label="Course Curriculum" className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-medium text-white text-center max-w-4xl leading-tight">
            Mastering Deep Work: A Structured <br className="hidden md:block" />{" "}
            Path to Peak Productivity
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Functional Accordion */}
          <div className="lg:col-span-7 flex flex-col">
            {curriculumData.map((module) => {
              const isExpanded = expandedModule === module.id;

              return (
                <div
                  key={module.id}
                  className={`border-b border-neutral-800 transition-all duration-300 ${isExpanded ? "pb-8" : "pb-0"}`}
                >
                  {/* Header */}
                  <div
                    onClick={() => toggleModule(module.id)}
                    className="flex justify-between items-center py-10 cursor-pointer group"
                  >
                    <div>
                      <h4
                        className={`text-xl font-medium transition-colors ${isExpanded ? "text-white" : "text-neutral-300 group-hover:text-white"}`}
                      >
                        Module {module.id}: {module.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-2 font-normal">
                        {module.duration}
                      </p>
                    </div>
                    {isExpanded ? (
                      <div className=" rotate-180">
                        <ArrowDown />
                      </div>
                    ) : (
                      <div>
                        <ArrowDown />
                      </div>
                    )}
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-0 border-t border-neutral-800/50">
                      {module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-5 group/lesson cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                                lesson.preview
                                  ? "bg-white border-white"
                                  : "border-neutral-700 bg-transparent group-hover/lesson:border-neutral-500"
                              }`}
                            >
                              <Play
                                className={`w-3 h-3 ${
                                  lesson.preview
                                    ? "text-blue-600 fill-blue-600"
                                    : "text-neutral-500 fill-neutral-500 group-hover/lesson:fill-neutral-300"
                                }`}
                              />
                            </div>
                            <span className="text-lg text-neutral-300 group-hover/lesson:text-white transition-colors">
                              {lesson.title}
                            </span>
                            {lesson.preview && (
                              <span className="text-[10px] uppercase tracking-wider bg-neutral-900 text-neutral-300 px-3 py-1.5 rounded-full border border-neutral-700 font-medium ml-2">
                                Preview
                              </span>
                            )}
                          </div>
                          <span className="text-lg text-neutral-500">
                            {lesson.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: CTA Card */}
          <div className="lg:col-span-5 bg-neutral-900/40 border border-neutral-800 rounded-[40px] p-5 md:p-12 top-24">
            <h3 className="text-3xl font-medium text-white mb-12">
              Not only video lessons!
            </h3>
            <ul className="flex flex-col gap-8 mb-12">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers - Stay on track effortlessly.",
                "Live Q&As - Expert guidance & accountability.",
                "Exclusive Community - Connect with others.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="p-1 rounded-full border border-neutral-700 bg-neutral-800/50 mt-1">
                    <BadgeCheck className="w-4 h-4 text-neutral-400" />
                  </div>
                  <span className="text-base text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full text-md rounded-2xl">
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
