"use client";

import {
  CgPresentation,
  CgPrinter,
  CgSlack,
  CgSmartHomeBoiler,
} from "react-icons/cg";
import { motion } from "framer-motion";
import { useState } from "react";
import classNames from "classnames";
import Featurs_3_1 from "./Features_3_1";

export default function Features_items3() {
  const [activeTab, setactiveTab] = useState(0);
  type f_items = {
    icone: React.ReactNode;
    header: string;
  };

  const feat_items3: f_items[] = [
    {
      icone: <CgPresentation />,
      header: "AI Assistant",
    },
    {
      icone: <CgSmartHomeBoiler />,
      header: "Simple Analytics",
    },
    {
      icone: <CgSlack />,
      header: "Easy Collaboration",
    },
    {
      icone: <CgPrinter />,
      header: "Smart Automation",
    },
  ];

  return (
    <div className="max-w-[920px]  mx-auto w-full ">
      <div className="flex flex-col gap-[96px] ">
        <div className="flex flex-col lg:flex-row flex-1 w-full relative items-center justify-around rounded-[32px] w-full py-[4px] border border-[rgb(36,36,36)] bg-[rgb(22,22,22)] ">
          {feat_items3.map((item, index) => {
            return (
              <>
                <div
                  className={classNames(
                    "flex relative w-full  items-center justify-center cursor-pointer rounded-[32px] p-[16px] gap-[8px]  ",
                    index === activeTab ? "" : "",
                  )}
                  onClick={() => setactiveTab(index)}
                >
                  {/* md:w-[188px] md:w-[237px] */}
                  {index === activeTab && (
                    <motion.div
                      className={classNames(
                        "absolute md:origin-[50%_50%_0px] inset-x-1   h-[55px] -z-1  bg-[rgb(31,31,31)] ",
                        // activeTab === 3
                        //   ? "  max-sm:w-[98%] max-md:w-[98%]  "
                        //   : " max-sm:w-[98%] max-md:w-[98%] ",
                      )}
                      layoutId="re"
                      style={{
                        borderRadius: 9999,
                      }}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <div
                    className={classNames(
                      "  z-10   ",
                      index === activeTab
                        ? "text-[rgb(251,251,251)]"
                        : "text-[#9B9CA1]",
                    )}
                  >
                    {item.icone}
                  </div>
                  <div
                    className={classNames(
                      " z-10 font-semibold   ",
                      index === activeTab
                        ? "text-[rgb(251,251,251)]"
                        : "text-[#9B9CA1]",
                    )}
                  >
                    {item.header}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* items */}
        <div>
          <Featurs_3_1 active={activeTab} />
        </div>
      </div>
    </div>
  );
}
