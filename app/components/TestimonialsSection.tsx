"use client";
import Slider from "react-slick";
import Image from "next/image";
import Badge from "./ui/Badge";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const testimonials = [
  {
    type: "text",
    avatar: "/assets/images/Avatar1.png",
    name: "Alex Carter",
    title: "Freelance Designer",
    quote:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
  },
  {
    type: "video",
    avatar: "/assets/images/Avatar2.png",
    name: "Daniel Foster",
    title: "Content Creator",
    thumbnail: "/assets/images/carousel1.jpg",
  },
  {
    type: "text",
    avatar: "/assets/images/Avatar3.png",
    name: "Mark Davidson",
    title: "Software Developer",
    quote:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
  {
    type: "video",
    avatar: "/assets/images/Avatar4.png",
    name: "Tom David",
    title: "Entrepreneur",
    thumbnail: "/assets/images/carousel2.jpg",
  },
  {
    type: "text",
    avatar: "/assets/images/Avatar5.png",
    name: "James Wilson",
    title: "Project Manager",
    quote:
      "This isn't just theory—it's actionable strategies. The framework for building deep work habits is phenomenal. Highly recommended for any knowledge worker.",
  },
];

export const TestimonialsSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false, // Set to false to better see the "bleed" effect
    speed: 500,
    slidesToShow: 4.2, // Shows a partial card on the right
    slidesToScroll: 1,
    arrows: false, // Using custom external buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.2, centerMode: false },
      },
    ],
  };

  return (
    <section className="bg-background py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 mb-12">
        <div className="flex justify-center">
          <Badge label="Testimonials" />
        </div>
        <h2 className="text-center text-h2 font-medium mb-16 leading-[1.15]">
          Real Results from Real People
        </h2>

        {/* ALIGNMENT ROW: Nav Buttons + Subtext */}
        <div className="flex justify-between items-end">
          <p className="text-body text-neutral-400">
            Join with 5K other students
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* CAROUSEL SECTION: Left-padded, Right-full */}
      <div className="px-6 md:px-0 md:pl-[calc((100vw-84rem)/2+1.5rem)] 2xl:pl-[calc((100vw-1280px)/2+1.5rem)]">
        <div className="carousel-container-flush-right">
          <Slider ref={sliderRef} {...settings} className="testimonials-slider">
            {testimonials.map((item, i) => (
              <div key={i} className="pr-6">
                {" "}
                {/* Spacing between cards */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-4xl p-5 md:p-8 h-100 flex flex-col justify-between relative overflow-hidden group">
                  {/* Card Content (Same as previous implementation) */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-neutral-700 overflow-hidden bg-neutral-800">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>

                  {item.type === "video" && item.thumbnail ? (
                    <div className="absolute inset-0">
                      <Image
                        src={item.thumbnail}
                        alt="thumb"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 text-primary-500 fill-primary-500 ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-neutral-400 line-clamp-6 text-body-sm leading-relaxed mt-10">
                      {item.quote}
                    </p>
                  )}

                  <div className="relative z-10">
                    <h4 className="text-body font-medium">{item.name}</h4>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
