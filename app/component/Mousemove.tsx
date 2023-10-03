"use client";
import { useMotionValue, useMotionTemplate, motion, useSpring } from "framer-motion";
import { MouseEvent, useState } from "react";
import header from "../component/header";
import classNames from "classnames";
import Image from "next/image";

export default function Mousemove() {
  let mouseXx = useMotionValue(0);
  let mouseYx = useMotionValue(0);

  //
  const shadowX = useSpring(0)
    const shadowY = useMotionValue(0)
    const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
    

  function handleMouseMove(e: MouseEvent) {
    let { left, top } = e.currentTarget.getBoundingClientRect();

    let xPosition = e.clientX - left;
    let yPosition = e.clientY - top;
    mouseXx.set(xPosition);
    mouseYx.set(yPosition);

    //
    
    console.log(mouseXx, mouseYx);
    
  }
  var opaci = useMotionTemplate`${mouseXx}`

  return (
    <>
      <div
        className="flex items-center justify-center bg-gray-200  "
        onMouseMove={handleMouseMove}
      >
        <div className="relative w-[320px] h-[320px] ">
          <div className="absolute bottom-0 left-0 w-30 h-30 rounded-md   ">
            <Image
              src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/646d1b08a9203b4455bb3d14_streets.png"
              width={150}
              height={150}
              alt="street"
              style={{
                opacity: opaci,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
