"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import applesso from "../../../public/apple sso.png"
import bloggImage from "../../../public/blogg_app.png"
import dockerImage from "../../../public/docker_Image.png"
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import PreviewSlider from "./PreviewSlider";


export function ProjectSectionDemo() {
    return (
        <TracingBeam className="px-6 mt-14 " >
            <h2 className="text-center text-2xl tracking-[6px] text-white relative " id="projects">MY PROJECTS </h2>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative" >
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl text-center md:text-start font-semibold mb-4">
                            {item.title}
                        </p>

                        <div className="md:text-sm text-[12px] ml-2 prose prose-sm dark:prose-invert ">
                            <div className="row-span-3 col-start-3 row-start-2">
                                {/* <motion.div className={cn("text-center md:h-60  w-full  sticky top-10 overflow-scroll")}>
                                    {item.content ?? null} */}
                                    <PreviewSlider />
                                {/* </motion.div> */}
                            </div>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Ecommerce Plateform for lingeries",
        description: (
            <>
                <p className="mt-5 text-sm leading-6 text-justify text-white/90 md:block hidden">
                Exotica Lingerie is a modern e-commerce platform built with Next.js and Node.js, specializing in stylish lingerie. 
                This platform contains a product catalog comprising product variations, wishlist and cart, as well as a secure OTP-based user authentication along with reCAPTCHA. 
                It also integrates payment gateway for easy payments and contains a custom order management dashboard for smoother workflows. Tailwind CSS designs it with a superb responsive UI design. 
                Policies provide transparency. MongoDB also takes care of handling data securely by encrypting data of the users. with proper hosting.
                </p>
            </>
        ),
        badge: "NextJs, NodeJs, ExpressJs, MongoDB", content: (<DirectionAwareHover imageUrl={applesso} >
            <p className="font-bold text-xl">Apple Sso</p>
            <p className="font-normal text-sm">Nextjs / Nodejs</p>
        </DirectionAwareHover>
        ),
    },
];
