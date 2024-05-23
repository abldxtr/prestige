"use client";

import classNames from "classnames";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import produce from "immer";
import { MouseEvent, ReactNode, useRef, useState } from "react";
import { IconType } from "react-icons";
import { TbAccessible, TbAdCircle, TbAperture } from "react-icons/tb";
import P_dropdown from "../prestige/P_headers_dropdown";
import Dropdown_pages from "./P_header_dropdown_pages";
import { IoIosArrowDown } from "react-icons/io";
export default function P_header() {
  const head_items = ["Product", "Pages", "Integration", "Blog", "Pricing"];
  // const submenuSafeAreaRef = useRef<HTMLSpanElement>(null);
  var mouseX = useMotionValue(0);
  var mouseY = useMotionValue(0);

  // ref.current.
  // let transpoly = useTransform(mouseX, [0, 100], [0, 30]);
  let poly = useMotionTemplate`polygon(${mouseX}% 0%,${mouseX}% 0%, 100% 100%, 0% 100%)`;
  console.log("poly", poly);

  const [menue, setmenue] = useState<string>("");

  function handle_menue(
    item: string,
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
  ) {
    setmenue(item);
    if (menue === "Pages" || menue === "Product") {
      let { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();

      let localx = e.pageX - left;
      let localy = e.pageY - top;
      if (localx > 0 && localx < width && localy > 0 && localy < height) {
        mouseX.set((localx / width) * 100);
        mouseY.set((localy / height) * 100);
      }
    }
    e;
  }
  return (
    <div className="fixed left-0 top-0 z-[200] w-full border-b border-[#161616] bg-[rgb(15_15_15)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[32px] py-[16px]">
        {/* <!-- left --> */}

        <div>
          <h1 className="fbfb cursor-default text-2xl font-semibold">
            Prestige
          </h1>
        </div>

        {/* <!-- center --> group-hover/pages:-rotate-180 */}

        <div className="">
          <ul className="[&_li]:lip md:flex space-x-[4px] text-[#4e4d51] hidden will-change-auto ">
            {head_items.map((item, index) => {
              return (
                <>
                  <li
                    className={classNames(
                      " flex gap-[4px] relative ",
                      // menue === "Product" || menue === "Pages"
                      //   ? "relative"
                      //   : "",
                    )}
                    key={index}
                    // onMouseEnter={(e) => handle_menue(item, e)}
                    // // onMouseMove={() => setmenue(item)}
                    onMouseLeave={() => setmenue("")}
                    // onMouseEnter={(e) => handle_menue(item, e)}
                    onMouseMove={(e) => handle_menue(item, e)}
                  >
                    {item}
                    {item === "Pages" && (
                      <IoIosArrowDown
                        className={classNames(
                          "flex items-center justify-center h-full  transiton-transform duration-300",
                          menue === "Pages" && "-rotate-180",
                        )}
                      />
                    )}

                    {item === "Product" && menue === "Product" && (
                      <>
                        <div
                          className={classNames(
                            " p-[8px]  flex flex-col ease-in transition-all duration-100 absolute top-12 -left-2 w-[336px] bg-[#161616] rounded-[12px] ",
                            // item !== "Product"
                            //   ? "invisible"
                            //   : "invisible group-hover:visible",
                          )}
                        >
                          <P_dropdown />
                        </div>
                        <motion.span
                          className=" absolute top-5 -left-2 z-[200] w-20 h-7 bg-red-500  "
                          // ref={submenuSafeAreaRef}
                          // onMouseEnter={(e) => handle_menue(item, e)}
                          onMouseMove={() => setmenue(item)}
                          // onMouseLeave={() => setmenue("")}
                          style={{
                            clipPath: poly,
                          }}
                        />
                      </>
                    )}

                    {item === "Pages" && menue === "Pages" && (
                      <>
                        <div
                          className={classNames(
                            " p-[8px] ease-in transition-all duration-100 absolute top-12 -left-2 bg-[#161616] rounded-[12px] overflow-hidden ",
                            // item !== "Pages"
                            //   ? "invisible"
                            //   : "invisible group-hover:visible",
                          )}
                        >
                          <Dropdown_pages />
                        </div>
                        <motion.span
                          className=" absolute top-5 -left-2 z-[200] w-20 h-7 bg-red-500  "
                          // ref={submenuSafeAreaRef}
                          onMouseMove={() => setmenue(item)}
                          // onMouseLeave={() => setmenue("")}
                          style={{
                            clipPath: poly,
                          }}
                        />
                      </>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        {/* <!-- right --> */}
        <div>
          <button className="buttonget">Get template</button>
        </div>
      </div>
    </div>
  );
}
