"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import cardImage from "../../../public/blob.svg"
import profile_Image from "../../../public/sidebar_images.png"

export function ThreeDCardDemo() {
  return (
      <CardContainer className="inter-var">
        <CardItem translateZ="100" className=" relative items-center flex justify-center">
          {/* I have try to set cardimage from top right left when its not work and set using translate */}
          {/* <Image src={cardImage} className="-z-10 absolute  w-96 top-0 right-0  group-hover/card:shadow-xl text-center " alt="thumbnail" /> */}

          <Image src={profile_Image} className=" absolute lg:h-full h-72 width-card  group-hover/card:shadow-xl" alt="thumbnail" />
        </CardItem>
      </CardContainer>
  );
}

