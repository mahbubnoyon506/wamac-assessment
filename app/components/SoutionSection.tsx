import Image from "next/image";
import Badge from "./ui/Badge";
const images = [
  "/assets/images/solution1.png",
  "/assets/images/solution2.png",
  "/assets/images/solution3.png",
  "/assets/images/solution4.png",
  "/assets/images/solution5.png",
  "/assets/images/solution6.png",
  "/assets/images/solution7.png",
  "/assets/images/solution8.png",
  "/assets/images/solution9.png",
];

export const SoutionSection = () => {
  return (
    <section id="overview" className="bg-background py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="text-center mb-12 md:mb-24">
          <Badge label="Are Distractions Holding You Back?" className="mb-3" />
          <h1 className="font-medium max-w-232 mx-auto leading-[1.15] text-gradient-muted mb-12">
            If you struggle to focus, feel overwhelmed by endl
            <span className="text-neutral-500">
              ess tasks, or procrastinate instead of making progress, you’re not
              alone.
            </span>
          </h1>

          {/* Stacked Images */}
          <div className="flex justify-center gap-3">
            {images.slice(0, 3).map((i) => (
              <div
                key={i}
                className="relative w-29.5 h-30 rounded-2xl  overflow-hidden bg-neutral-800"
              >
                <Image src={i} alt="user" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-5 relative rounded-[40px] overflow-hidden aspect-8/9">
            <Image
              src="/assets/images/mizunokozuki.png"
              alt="Focus"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 bg-neutral-900 rounded-[40px] p-5 md:p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Badge label="No worries" />
              <div className="text-right">
                <div className="flex justify-end -space-x-3 mb-2">
                  {images.slice(3, 6).map((n) => (
                    <div
                      key={n}
                      className="relative w-10 h-10 overflow-hidden bg-neutral-800 rounded-[99px]"
                    >
                      <Image src={n} alt="user" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-neutral-500 uppercase">
                  Join with 5K other students
                </p>
              </div>
            </div>

            <div className="mt-20 flex gap-8 items-end">
              <div className="flex-1">
                <p className="text-neutral-500 text-body-sm mb-4 max-w-50">
                  The ability to concentrate deeply is the ultimate productivity
                  hack
                </p>
                <h3 className="text-h3 font-medium leading-tight max-w-60">
                  And fortunately it’s a skill you can train & develop.
                </h3>
              </div>

              {/* Vertical Step Gallery */}
              <div className="flex flex-col gap-3">
                {images.slice(6, 9).map((i) => (
                  <div
                    key={i}
                    className="relative w-29.5 h-30 rounded-2xl  overflow-hidden bg-neutral-800"
                  >
                    <Image src={i} alt="user" fill className="object-cover" />
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
