"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Comprehensive Curriculum",
        description:
          "Explore a wide range of musical styles and techniques. Our curriculum covers everything from classical to contemporary, ensuring a well-rounded music education. Whether you're a beginner or an advanced student, we have programs tailored to your skill level and interests.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Comprehensice Curriculum
        </div>
      ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
          "Practice and perform in our cutting-edge studios and concert halls. Our facilities are equipped with professional-grade instruments and recording equipment, providing the perfect environment for learning and creating music. Experience the joy of playing on top-quality instruments in acoustically optimized spaces.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: "Performance Opportunities",
        description:
          "Showcase your skills and gain confidence through regular recitals and concerts. We believe that performance is an essential part of musical growth. Our school organizes numerous events throughout the year, giving you the chance to shine on stage and share your passion with friends, family, and the community.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Performance Opportunities
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs