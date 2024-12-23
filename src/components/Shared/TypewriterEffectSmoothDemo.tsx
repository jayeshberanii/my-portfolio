"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ContectTooltipDemo } from "./ContectTooltipDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import Link from 'next/link'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hey",
    },
    {
      text: "There,",
    },
    {
      text: "I'm",
    },
    {
      text: "Jayesh",
      className: "dark:text-portfolio-cyan",
    },
    {
      text: "Berani",
    },
  ];
  return (

    <div className="flex flex-col items-center justify-end h-min mt-5">

      <TypewriterEffectSmooth words={words} />
      <HeroHighlightDemo />
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-5 text-center">
        Hands on In to<span className="text-portfolio-cyan">  MERN Stack </span>
      </p>
      <div className="flex sm:hidden text-neutral-400 mt-5">
        <div className="flex gap-3">
           <Link target="_blank" href="https://www.linkedin.com/in/jayesh-berani" className="group">
          <IconBrandLinkedin className="w-8 h-8 " />
        </Link>
            <Link target="_blank" href="https://www.instagram.com/jayeshberanii/" className="group">
              <IconBrandInstagram className="w-8 h-8  " />
            </Link>

          <Link target="_blank" href="https://github.com/jayeshberanii" className="group">
            <IconBrandGithub className="w-8 h-8 " />
          </Link>
          <Link target="_blank" href="https://x.com/jayesh_berani" className="group">
            <IconBrandX className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <ContectTooltipDemo />
    </div>
  );
}
