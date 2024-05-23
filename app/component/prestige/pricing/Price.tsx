"use client";
import { CgTally } from "react-icons/cg";
import Price_grid from "./Price_grid";
import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Price() {
  const [active, setActive] = useState("montly");
  return (
    <div className="mx-w-[1280px] mx-auto  ">
      <div className="flex flex-col gap-[96px] items-center justify-center  px-[20px] sm:px-[30px] ">
        {/* first col */}
        <div className="max-w-[768px] mx-auto text-center ">
          <div className="flex flex-col gap-[16px] items-center ">
            {/* text icone */}
            <div className="flex items-center w-min justify-center gap-[4px] py-[8px] px-[12px] rounded-[32px] border border-[#236456] bg-[#112220] ">
              <div className="text-[#33c6ab] ">
                <CgTally />
              </div>
              <div className="text-[#33c6ab] text-[14px]  ">Pricing</div>
            </div>

            {/* text h */}
            <div>
              <h2 className=" md:text-[48px] text-[32px] text-[#FBFBFB] font-semibold ">
                OSupercharge your growth
              </h2>
            </div>

            {/* text p */}
            <div>
              <p className="text-[#9b9ca1] text-[18px] font-normal  ">
                Whether youre a small startup, a growing mid-sized business, or
                a large enterprise, we have plans tailored to your specific
                demands.
              </p>
            </div>
          </div>
        </div>

        {/* price tab */}
        <div className="flex items-center justify-center gap-[10px] p-[4px] border-[rgb(36,36,36)] bg-[rgb(22,22,22)] rounded-[25px] ">
          <div onClick={() => setActive("montly")} className="relative">
            <h6
              className={classNames(
                "text-[16px] font-medium rounded-[24px] py-[8px] px-[16px] z-10 transiton     ",
                active === "montly"
                  ? "text-[rgb(251,251,251)] cursor-text relative "
                  : "text-[rgb(155,156,161)] cursor-pointer ",
              )}
            >
              Montly
            </h6>
            {active === "montly" && (
              <motion.div
                className={classNames(
                  "absolute  inset-0  -z-1  bg-[rgb(31,31,31)] ",
                )}
                layoutId="priz"
                style={{
                  borderRadius: 9999,
                }}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </div>
          <div onClick={() => setActive("yearly")} className="relative z-1">
            <h6
              className={classNames(
                "text-[16px] font-medium rounded-[24px] py-[8px] px-[16px] z-10 transition    ",
                active === "yearly"
                  ? "text-[rgb(251,251,251)] cursor-text relative "
                  : "text-[rgb(155,156,161)] cursor-pointer ",
              )}
            >
              Yearly
            </h6>
            {active === "yearly" && (
              <motion.div
                className={classNames(
                  "absolute  inset-0  -z-1  bg-[rgb(36,36,36)] ",
                )}
                layoutId="priz"
                style={{
                  borderRadius: 9999,
                }}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </div>
        </div>

        {/* second col */}
        <div className="w-full  ">
          <div className="flex items-center justify-between ">
            <Price_grid active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
