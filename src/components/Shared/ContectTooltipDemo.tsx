"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaGithub } from "react-icons/fa";
import instagram from "../../../public/instagram_contect.png"
import github from "../../../public/github_contect.png"
import linkedin from "../../../public/linkedin_contect.png"
import twitter from "../../../public/twitter.png"
const people = [
  {
    id: 1,
    name: "Git Hub",
    designation: "jayeshberani",
    image: github,

    url: "https://github.com/jayeshberanii"
  },
  {
    id: 2,
    name: "Instagram",
    designation: "jayeshberanii",
    image: instagram,
    url: "https://www.instagram.com/jayeshberanii/"

  },
  {
    id: 3,
    name: "Linked In",
    designation: "Jayesh Berani",
    image: linkedin,
    url: "https://www.linkedin.com/in/jayesh-berani/"

  },
  {
    id: 4,
    name: "Twitter",
    designation: "@jayeshberani",
    image: twitter,
    url: "https://x.com/jayesh_berani"

  },
];

export function ContectTooltipDemo() {
  return (
    <div className="sm:flex hidden flex-row items-center justify-center w-full my-5">
      <AnimatedTooltip items={people} />
      
    </div>
  );
}
