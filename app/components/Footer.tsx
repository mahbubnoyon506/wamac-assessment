import Image from "next/image";
import { Divider } from "./ui/Divider";

const images = [
  "/assets/images/solution4.png",
  "/assets/images/solution5.png",
  "/assets/images/solution6.png",
];

export const Footer = () => {
  return (
    <footer className="bg-background pt-10 md:pt-20 pb-5 md:pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div>
            <h2 className="text-h2 font-bold mb-2">
              The Deep Work <br /> Blueprint
            </h2>
            <p className="text-neutral-500 text-body">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          {/* Join Card */}
          <div className="relative group cursor-pointer bg-primary-500 p-6 rounded-3xl w-full md:w-[320px] overflow-hidden">
            <div className="flex items-center justify-between gap-[-10px] mb-8">
              <div className="flex justify-end -space-x-3">
                {images.map((n) => (
                  <div
                    key={n}
                    className="relative w-10 h-10 overflow-hidden bg-neutral-800 rounded-[99px]"
                  >
                    <Image src={n} alt="user" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="ml-4 p-2 bg-white rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2466F2"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>
            </div>
            <p className="text-white font-medium text-body-sm">
              Join with 5K other students
            </p>
          </div>
        </div>

        {/* Glowing Divider */}
        <Divider className="opacity-20" />

        {/* Bottom Section: Copyright & Links */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-body-sm">
            © Copyright 2024, All Rights Reserved
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-body-sm">
            <a href="#" className="hover:text-primary-500 transition-colors">
              Terms & conditions
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Refund policy
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
