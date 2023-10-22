import { MdKeyboardArrowLeft } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";

import {
  CgPresentation,
  CgPrinter,
  CgSlack,
  CgSmartHomeBoiler,
} from "react-icons/cg";

export default function Featurs_3_1({ active }: { active: number }) {
  type f_items = {
    icone: React.ReactNode;
    header: string;
    sub: string;
    txt: string;
    img: string;
  };

  const feat_items3: f_items[] = [
    {
      icone: <CgPresentation />,
      header: "AI Assistant",
      sub: "Your new ultimate productivity companion",
      img: "https://framerusercontent.com/images/TOMzrEDFKlodu6G808I1S6Mvtvk.png",
      txt: "Built-in analytics and reporting capabilities help businesses gather insights, track KPI, and make data-driven decisions.",
    },
    {
      icone: <CgSmartHomeBoiler />,
      header: "Simple Analytics",
      sub: "Help you track what really matters to you",
      img: "https://framerusercontent.com/images/upItfYgrUa9SIxgxjs5VAFbSors.png",
      txt: "Working together on documents has never been easier, allowing you and your team to collaborate and provide constructive feedback.",
    },
    {
      icone: <CgSlack />,
      header: "Easy Collaboration",
      sub: "Solution for seamless productive teamwork",
      img: "https://framerusercontent.com/images/1MTesbroFpLTfcAJlQXdRQ4w.png",
      txt: "Designed to seamlessly integrate into your personal and professional life, our AI Assistant is here to revolutionize the way you accomplish tasks.",
    },
    {
      icone: <CgPrinter />,
      header: "Smart Automation",
      sub: "Streamline your entire workflow fast",
      img: "https://framerusercontent.com/images/yUqjCWEAa33bUAaOny0Ge0qJvE.png",
      txt: "You can focus on the creative aspects of content creation while leaving time-consuming tasks to our intelligent system.",
    },
  ];

  return (
    <AnimatePresence>
      <div>
        {feat_items3.map((item, index) => {
          return (
            <>
              {active === index && (
                <motion.div
                  className="flex items-center justify-center flex-col-reverse gap-[64px] md:flex-row"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* first */}

                  <div className="flex flex-col gap-[16px] md:w-1/2 flex-1 ">
                    {/* icone */}
                    <div
                      className={classNames(
                        "flex items-center gap-[16px] ",
                        index === 0
                          ? "text-[#33abd1] "
                          : index === 1
                          ? "text-[#6575FB]"
                          : index === 2
                          ? "text-[#E29D37]"
                          : index === 3
                          ? "text-[#33C6AB]"
                          : "",
                      )}
                    >
                      <div
                        className={classNames(
                          " flex items-center justify-center text-2xl w-[48px] h-[48px] border border-[rgb(35,100,86)]  rounded-[12px]  ",
                          index === 0
                            ? "border-[#33abd1] bg-[rgb(17,30,34)] "
                            : index === 1
                            ? "border-[rgb(44,60,120)] bg-[rgb(17,20,34)]"
                            : index === 2
                            ? "border-[rgb(120,90,44)] bg-[rgb(34,29,17)]"
                            : index === 3
                            ? "border-[#33C6AB] bg-[rgb(17,34,32)]"
                            : "",
                        )}
                      >
                        {item.icone}
                      </div>

                      <div className=" text-[16px] font-bold ">
                        {item.header}
                      </div>
                    </div>
                    {/* sub */}
                    <div>
                      <p className="text-[rgb(251,251,251)] text-[32px] font-bold  ">
                        {item.sub}
                      </p>
                      {/* txt */}
                      <div className="text-[rgb(155,156,161)] text-[16px] font-normal ">
                        {item.txt}
                      </div>
                      <Link
                        href="/"
                        className="flex items-center hover:bg-[#303030] transition rounded-[64px] mt-[64px] mx-auto h-fit w-fit bg-[#1F1F1F] border border-[rgb(59,59,59)] text-[#FBFBFB] py-[16px] pl-[24px] pr-[20px] "
                      >
                        Learn more
                        <MdKeyboardArrowLeft className="rotate-180  " />
                      </Link>
                    </div>
                  </div>

                  {/* second */}
                  <motion.div
                    className="flex items-center justify-center h-[400px] md:w-1/2 flex-1 "
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -300, opacity: 0 }}
                  >
                    <img src={item.img} alt="" />
                  </motion.div>
                </motion.div>
              )}
            </>
          );
        })}
      </div>
    </AnimatePresence>
  );
}
