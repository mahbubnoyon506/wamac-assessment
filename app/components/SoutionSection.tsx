import Image from "next/image";
import { Badge } from "./ui/Badge";

export const SoutionSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="text-center mb-24">
          <Badge>Are Distractions Holding You Back?</Badge>
          <h2 className="text-h2 font-medium max-w-4xl mx-auto leading-[1.15] text-gradient-muted mb-12">
            If you struggle to focus, feel overwhelmed by endless tasks, or
            procrastinate instead of making progress, you’re not alone.
          </h2>

          {/* Stacked Images */}
          <div className="flex justify-center -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-24 rounded-2xl border-4 border-neutral-950 overflow-hidden bg-neutral-800"
              >
                <Image
                  src="/assets/images/Logo.png"
                  alt="user"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative rounded-[40px] overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/assets/images/mizunokozuki.png"
              alt="Focus"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-neutral-900 rounded-[40px] p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Badge>No worries</Badge>
              <div className="text-right">
                <div className="flex justify-end -space-x-2 mb-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-6 h-6 rounded-full border-2 border-neutral-900 bg-neutral-700"
                    />
                  ))}
                </div>
                <p className="text-[10px] text-neutral-500 uppercase">
                  Join with 5K other students
                </p>
              </div>
            </div>

            <div className="mt-20 flex gap-8 items-end">
              <div className="flex-1">
                <p className="text-neutral-500 text-body-sm mb-4">
                  The ability to concentrate deeply is the ultimate productivity
                  hack.
                </p>
                <h3 className="text-h3 font-medium leading-tight">
                  And fortunately it’s a skill you can train & develop.
                </h3>
              </div>

              {/* Vertical Step Gallery */}
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className="w-16 h-16 rounded-xl bg-neutral-800 overflow-hidden grayscale"
                  >
                    <Image
                      src="/assets/images/Logo.png"
                      alt="step"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
