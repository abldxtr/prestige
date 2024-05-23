"use client";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  useSpring,
} from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import header from "../component/header";
import classNames from "classnames";
import Image from "next/image";

export default function Mousemove() {
  const [msx, setmsx] = useState<number>(0);
  let mouseXx11 = useMotionValue(0);
  let mouseXx22 = useMotionValue(0);
  let mouseXx33 = useMotionValue(0);

  let blurxm1 = useMotionValue(20);
  // let mouseYx = useMotionValue(0);
  let blurxm2 = useMotionValue(20);
  let blurxm3 = useMotionValue(20);

  let x = useMotionValue(0);
  let y = useMotionValue(0);
  const prop = { mass: 0.4, stiffness: 350, damping: 40 };
  // what is damping explain it
  //
  let xSmooth = useSpring(x, prop);
  let ySmooth = useSpring(y, prop);

  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);

  // let numbXx = parseInt(mouseXx.);
  // let numbYx = parseInt(mouseYx);
  // var xPosition = 1;

  // //
  // const shadowX = useSpring(0);
  // const shadowY = useMotionValue(0);
  // const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`;
  // const opacityM = useMotionTemplate`opacity-${mouseXx}`;

  function handleMouseMove(e: MouseEvent) {
    let { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - left);
    y.set(e.clientY - top);
    const reff1 = first.current?.offsetLeft;
    const reff2 = second.current?.offsetLeft;
    const reff3 = third.current?.offsetLeft;
    // const reff1 = first.current?.offsetWidth;
    // const reff2 = second.current?.offsetWidth;
    // const reff3 = third.current?.offsetWidth;
    // console.log("reff1", reff1);
    // console.log("reff2", reff2);
    // console.log("reff3", reff3);

    // console.log("e.client", e.pageX, e.clientX, left, top, width, height);

    if (
      first.current !== undefined &&
      first.current !== null &&
      second.current !== undefined &&
      second.current !== null &&
      third.current !== undefined &&
      third.current !== null
    ) {
      console.log("unnnndddd", first.current.offsetWidth);
      let xPosition = e.pageX - left;
      console.log("xPosition", xPosition);

      let xPosition2 =
        e.pageX -
        (second.current.offsetLeft + left) +
        second.current.offsetWidth / 2;
      console.log("xPosition2", xPosition2);

      let xPosition3 =
        e.pageX -
        (third.current.offsetLeft + left) +
        third.current.offsetWidth / 2;
      mouseXx11.set(xPosition / left);
      mouseXx22.set(xPosition2 / left);
      mouseXx33.set(xPosition3 / left);
      blurxm1.set(20 - (xPosition / left) * 20);
      blurxm2.set(20 - (xPosition2 / left) * 20);
      blurxm3.set(20 - (xPosition3 / left) * 20);
    }

    // let xPosition = e.pageX - left;
    // let xPosition2 = e.pageX - 2 * left;
    // let xPosition3 = e.pageX - 3 * left;
    // console.log(xPosition, xPosition2, xPosition3);
    // 598.671875 398.671875 198.671875
    // console.log(left, "ffff");

    // var pp = e.o
    // var yPosition = e.clientY - top;

    // mouseYx.set(yPosition / height);

    // var opaci = useMotionTemplate`${mouseXx}`;
    // console.log(30 - (xPosition / width) * 10 * 2);

    // console.log(reff1, reff2, reff3);

    //

    // console.log(mouseXx, mouseYx.getPrevious());
    // console.log(left, xPosition);
  }
  var opaci11 = useMotionTemplate`${mouseXx11}`;
  var opaci2 = useMotionTemplate`${mouseXx22}`;
  var opaci3 = useMotionTemplate`${mouseXx33}`;

  var blurm = useMotionTemplate`blur(${blurxm1}px)`;
  var blurm22 = useMotionTemplate`blur(${blurxm2}px)`;
  var blurm33 = useMotionTemplate`blur(${blurxm3}px)`;

  // console.log(mouseXx);

  return (
    <div className="grid grid-cols-9  gap-[24px] bg-black ">
      <motion.div
        className=" col-start-3 relative col-span-5 bg-[#1d1c20] border border-[#ffffff14] rounded-[24px]   "
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className=" absolute z-[100] w-4 h-8 rounded-full bg-gray-600 "
          style={{
            left: xSmooth,

            top: ySmooth,
          }}
        />
        <motion.div className="relative  overflow-hidden min-h-[400px] p-[32px]  w-full  ">
          <div className="max-w-[380px] md:mx-auto md:max-w-full  ">
            <h3 className="text-[20px] font-bold mb-[8px] text-[#FFFFFF] ">
              Generate magical visuals for your designs
            </h3>
            <p className="text-[15px] font-semibild mb-[8px] text-[#A9A9A9] ">
              With Magic Image, you can quickly generate images in Figma while
              you design.
            </p>
          </div>
          <motion.div className="relative h-full -bottom-16 flex ">
            {/* 1 */}
            <motion.div
              className={classNames(
                "w-[200px] h-[200px] [box-shadow:0_20px_25px_#00000080,_inset_0_2px_2px_#525154] [background-image:linear-gradient(#343236,#38343f)]  rotate-[2deg] z-[4] rounded-[32px] relative -button-[24px] overflow-hidden flex flex-col shrink-0 items-center justify-center   ",
              )}
              ref={first}
            >
              <img
                src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg"
                alt="Magic Image icon"
              />
              <motion.div
                className="bg-[url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/646d1b08a9203b4455bb3d14_streets.png')] rounded-[32px] bg-center bg-cover  absolute inset-0 position-1/2 object-fill object-center   "
                style={{
                  opacity: opaci11,
                  filter: blurm,
                }}
              />
            </motion.div>

            {/* 2 pic */}

            <motion.div
              className={classNames(
                "w-[200px] h-[200px] rotate-[-2deg] z-[2] [box-shadow:0_20px_25px_#00000080,_inset_0_2px_2px_#525154] [background-image:linear-gradient(#343236,#38343f)] rounded-[32px] relative shrink-0  overflow-hidden flex flex-col items-center justify-center   ",
              )}
              ref={second}
            >
              <img
                src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg"
                alt="Magic Image icon"
              />
              <motion.div
                className="bg-[url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/646d1a4d9e7c0ce792de6777_basketball-player.png')] rounded-[32px] bg-cover  absolute inset-0 object-cover bg-center  "
                style={{
                  opacity: opaci2,
                  filter: blurm22,
                }}
              />
            </motion.div>

            {/* 3 */}
            <motion.div
              className={classNames(
                "w-[200px] h-[200px] rotate-[5deg] [box-shadow:0_20px_25px_#00000080,_inset_0_2px_2px_#525154] [background-image:linear-gradient(#343236,#38343f)]  relative rounded-[32px] shrink-0  overflow-hidden flex flex-col items-center justify-center   ",
              )}
              ref={third}
            >
              <img
                src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg"
                alt="Magic Image icon"
              />
              <motion.div
                className="bg-[url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123d92b0429bc30db0686f_magic-img-1.png')] object-cover bg-center bg-cover rounded-[32px] absolute inset-0 "
                style={{
                  opacity: opaci3,
                  filter: blurm33,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
