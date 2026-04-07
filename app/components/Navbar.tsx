"use client";
import { useState } from "react";
import Image from "next/image";
import { SwitchTheme } from "./SwitchTheme";
import { Button } from "./ui/Button";
import { Divider } from "./ui/Divider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/Logo.png"
            alt="PPA Logo"
            width={84}
            height={31}
            className="rounded-lg"
          />
        </div>

        {/* Desktop Links - Hidden on SM and MD (under 768px) */}
        <div className="hidden lg:flex items-center gap-8 text-body-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">
            Curriculum
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="">
            <SwitchTheme />
          </div>
          <div className="hidden lg:block">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-neutral-900 border border-neutral-800 text-white"
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Active for MD and SM */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top">
          <div className="flex flex-col gap-4 text-body font-medium text-neutral-400">
            <a href="#" className="hover:text-white">
              Curriculum
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
          <div className="h-[1px] bg-neutral-800" />
          <div className="flex flex-col gap-4">
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
      <Divider />
    </nav>
  );
};
