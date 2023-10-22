"use client";

import classNames from "classnames";
import produce from "immer";
import { ReactNode, useState } from "react";
import { IconType } from "react-icons";
import { TbAccessible, TbAdCircle, TbAperture } from "react-icons/tb";
import P_dropdown from "../prestige/P_headers_dropdown";
import Dropdown_pages from "./P_header_dropdown_pages";

import { IoIosArrowDown } from "react-icons/io";
export default function P_header() {
  const head_items = ["Product", "Pages", "Integration", "Blog", "Pricing"];

  const [menue, setmenue] = useState<string>("Product");

  function handle_menue(item: string) {
    setmenue(item);
  }
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-[#161616] bg-[rgb(15_15_15)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[32px] py-[20px]">
        {/* <!-- left --> */}

        <div>
          <h1 className="fbfb cursor-default text-2xl font-semibold">
            Prestige
          </h1>
        </div>

        {/* <!-- center --> */}

        <div className="">
          <ul className="[&_li]:lip md:flex space-x-[4px] text-[#4e4d51] hidden ">
            {head_items.map((item, index) => {
              return (
                <>
                  <li
                    className={classNames(
                      "group flex gap-[4px] ",
                      menue === "Product" || menue === "Pages"
                        ? "relative"
                        : "",
                      menue === "Pages" && "group/pages",
                    )}
                    key={index}
                    onMouseEnter={(per) => setmenue(item)}
                  >
                    {item}
                    {item === "Pages" && (
                      <IoIosArrowDown
                        className={classNames(
                          "flex items-center justify-center h-full group-hover/pages:-rotate-180 transiton-transform duration-300",
                        )}
                      />
                    )}
                    <div
                      className={classNames(
                        "invisible p-[8px]  flex flex-col ease-in transition-all duration-100 absolute top-12 -left-2 w-[336px] bg-[#161616] rounded-[12px] overflow-hidden ",
                        item !== "Product"
                          ? "invisible"
                          : "invisible group-hover:visible",
                      )}
                    >
                      {item === "Product" && <P_dropdown />}
                    </div>

                    <div
                      className={classNames(
                        "invisible p-[8px] ease-in transition-all duration-100 absolute top-12 -left-2 bg-[#161616] rounded-[12px] overflow-hidden ",
                        item !== "Pages"
                          ? "invisible"
                          : "invisible group-hover:visible",
                      )}
                    >
                      {item === "Pages" && <Dropdown_pages />}
                    </div>
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
