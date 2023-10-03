"use client";

import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

type tab = {
  id: string;
  label: string;
};
type ttab = tab[];

let items: ttab = [
  { id: "world", label: "world" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business." },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

const Tab = () => {
  const [activeTab, setactiveTab] = useState(items[0].id);
  return (
    <div>
      <div className="flex space-x-1 ">
        {items.map((tab) => {
          return (
            <button
              onClick={() => setactiveTab(tab.id)}
              key={tab.id}
              className={classNames(
                "rounded-full relative focus-visible:outline  px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 ",
                activeTab === tab.id ? "" : "hover:opacity-50",
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  className={classNames("absolute inset-0 bg-blue-500 rounded-full ")}
                  transition={{type:"spring", duration:0.6}}
                  
                  layoutId="active-pile"
                />
              )}

              <span className="relative z-10 mix-blend-exclusion ">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
