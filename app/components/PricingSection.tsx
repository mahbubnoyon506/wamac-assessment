import React from "react";
import Badge from "./ui/Badge";
import { Button } from "./ui/Button";
import IconBox from "./ui/IconBox";
import CheckIcon from "./ui/CheckIcon";

export const PricingSection = () => {
  return (
    <section className="bg-background py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-12 gap-6">
        {/* Left Card: Bonus Information */}
        <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-4xl p-5 md:p-16 flex flex-col justify-center">
          <div>
            <Badge label="Introducing" className="mb-3" />
          </div>

          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
            The Deep Work Blueprint
          </h1>
          <p className="text-neutral-400 mb-12">
            What extra you will get if you enroll now
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-neutral-300">
              <IconBox icon={<CheckIcon />} size="sm" />
              <span className="text-sm md:text-base">
                Bonus: 1:1 coaching session to boost focus.
              </span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300">
              <IconBox icon={<CheckIcon />} size="sm" />
              <span className="text-sm md:text-base">
                Discount: Save 30% when you enroll now!
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Pricing */}
        <div className="lg:col-span-5 w-full lg:w-112.5 bg-neutral-900/40 border border-blue-900/30 rounded-4xl p-5 md:p-12 relative flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-semibold text-white">$349</span>
                <span className="text-2xl text-neutral-500 line-through decoration-red-500">
                  $500
                </span>
              </div>
              <p className="text-neutral-400 text-sm font-medium">
                30% off until 4d : 2h : 41m : 17s
              </p>
            </div>
            <div className="pt-3 md:pt-0">
              <Badge label="30% off" className="pt-3 md:pt-0" />
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {[
              "6h of videos - Step-by-step deep work strategies.",
              "Templates & Trackers - Stay on track effortlessly.",
              "Live Q&As - Expert guidance & accountability.",
              "Exclusive Community - Connect with others.",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 text-neutral-300"
              >
                <IconBox icon={<CheckIcon />} size="sm" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <Button variant="primary" className="w-full text-md rounded-2xl">
            Enroll now
          </Button>
        </div>
      </div>
    </section>
  );
};
