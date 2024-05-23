"use client";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { MouseEvent, ReactNode, Ref, forwardRef, useRef } from "react";

export default function Mousemovee() {
  const pic = [
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/646d1b08a9203b4455bb3d14_streets.png",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/646d1a4d9e7c0ce792de6777_basketball-player.png",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123d92b0429bc30db0686f_magic-img-1.png",
  ];
  const itemsRef = useRef([]);

  let mouseXx11 = useMotionValue(0);

  function handleMouseMove(e: MouseEvent) {
    let { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseXx11.set(e.pageX - left);
  }

  return (
    <div className="flex w-full h-full items-center justify-center   gap-[24px] bg-black ">
      <motion.div
        className=" bg-[#1d1c20] flex items-center justify-center gap-[24px] border border-[#ffffff14] p-8 rounded-[24px]   "
        onMouseMove={handleMouseMove}
      >
        {pic.map((img, index) => (
          <Imgeffect
            key={index}
            mouseXx11={mouseXx11}
            img={img}
            ref={(el) => (itemsRef.current[index] = el)}
          />
        ))}
      </motion.div>
    </div>
  );
}

const Imgeffect = forwardRef((mouseXx11:MotionValue<number>,img:string, ref:Ref<HTMLImageElement>) => (
  // const first = useRef<HTMLDivElement>(null);

  const reff1 = ref.current?.offsetWidth;
  let distance = useTransform(mouseXx11, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    console.log("bound", bounds.width);
    console.log("val", val);
    console.log("reff1", reff1);

    let res = val - bounds.x - bounds.width / 2;
    console.log("res", res);

    return res;
  });
  let opacity = useTransform(distance, [0, 190], [0, 1]);
  let opacityop = useTransform(distance, [0, 190], [1, 0]);

  let blur = useTransform(distance, [0, 210], [20, 0]);

  var blurm = useMotionTemplate`blur(${blur}px)`;

  return (
    <div
      ref={ref}
      className="w-[200px] h-[200px] [box-shadow:0_20px_25px_#00000080,_inset_0_2px_2px_#525154] [background-image:linear-gradient(#343236,#38343f)]  rotate-[2deg] z-[4] rounded-[32px] relative -button-[24px] overflow-hidden flex flex-col shrink-0 items-center justify-center"
    >
      {/* <motion.img
        src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg"
        alt="Magic Image icon"
        className=" z-20   "
        style={{
          opacity: opacityop,
        }}
      /> */}
      <Img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg"
        className="z-20" style={{ opacity: opacityop }} ></Img>

      <motion.img
        src={img}
        alt=""
        className="rounded-[32px] bg-cover absolute inset-0 object-cover bg-center"
        style={{
          opacity: opacity,
          filter: blurm,
        }}
      />
    </div>
  );
));



interface Props {
  children?: ReactNode;
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const Img = forwardRef((props: Props, ref?: Ref<HTMLImageElement>) => {
  return (
    <motion.img src={props.src} alt="svg" style={props.style} className={props.className} ref={ref}>
      {props.children}
    </motion.img>
  );
});
