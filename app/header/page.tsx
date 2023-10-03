"use client";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { MouseEvent } from "react";
import { AiOutlineCheck } from "react-icons/ai";
export default function page() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  let textt: {
    icone: React.JSX.Element;
    txt: string;
  }[] = [
    {
      icone: <AiOutlineCheck />,
      txt: "Courses on Framer Motion, Tailwind and Remix",
    },
    {
      icone: <AiOutlineCheck />,
      txt: "New videos added weekly",
    },

    {
      icone: <AiOutlineCheck />,
      txt: "Refactoring videos on React",
    },

    {
      icone: <AiOutlineCheck />,
      txt: "Private Discord",
    },

    {
      icone: <AiOutlineCheck />,
      txt: "Summaries with code",
    },
    {
      icone: <AiOutlineCheck />,
      txt: "Full access to all future Build UI courses",
    },
  ];

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPosition = clientY - top;
    mouseX.set(xPosition);
    mouseY.set(yPosition);
  }

  return (
    <>
      <main className="mx-20 my-8">
        <div
          className="relative max-w-lg rounded-3xl border
        border-gray-700 bg-gray-900 p-8 group overflow-hidden
         "
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px ,rgb(12 165 233/0.15) 0%,transparent 80%)`,
            }}
          />
          <h3
            className="text-base font-semibold
          leading-7 text-sky-500"
          >
            Lifetime membership
          </h3>
          <p
            className="mt-2 flex items-baseline
           gap-x-2"
          >
            <span
              className="text-3xl font-bold tracking-tight 
            text-white/50 line-through"
            >
              $249
            </span>
          </p>
          <div className="mt-2 flex items-center gap-x-2">
            <span
              className="text-5xl font-bold tracking-tight
             text-white"
            >
              $149
            </span>
            <div className=" flex flex-col ">
              <span className="text-base font-medium text-white ">
                early bird discount
              </span>
              <span className="text-base font-medium text-gray-400">
                one-time payment
              </span>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Lifetime access to all current and future premium Build UI courses,
            forever.
          </p>
          <ul className="mt-8 text-sm space-y-3 text-gray-600 sm:mt-10 leading-6 ">
            {textt.map((i) => {
              return (
                <li className="flex gap-x-3 text-gray-300 items-center">
                  <span className="text-lg text-sky-400">{i.icone}</span>
                  <span>{i.txt} </span>
                </li>
              );
            })}
          </ul>
          {/* button */}
          <button className="w-full rounded-md text-white font-bold text-center py-3 bg-blue-400 hover:bg-blue-500 transition mt-10 ">
            Buy now
          </button>
        </div>
      </main>
    </>
  );
}
