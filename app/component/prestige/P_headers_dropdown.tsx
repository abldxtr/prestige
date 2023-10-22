import React, { ReactNode } from "react";
import { TbAccessible, TbAdCircle, TbAperture } from "react-icons/tb";
// import { DM_Sans } from "next/font/google";
import classNames from "classnames";

// const dmsan = DM_Sans({
//   subsets: ["latin"],
//   variable: '--font-dmsan',

// });

export default function P_dropdown() {
  type dropdown = {
    title: string;
    subtitle: string;
    icone: ReactNode;
  };
  const dropdown_items: dropdown[] = [
    {
      title: "Advanced analytics",
      subtitle: "Understanding of your customers",
      icone: <TbAccessible />,
    },
    {
      title: "Profiles management",
      subtitle: "Personalized experience for each user",
      icone: <TbAdCircle />,
    },
    {
      title: "System commands",
      subtitle: "Control the system functionality",
      icone: <TbAperture />,
    },
  ];

  return (
    <>
      {dropdown_items.map((item, index) => {
        return (
          <>
            <div
              className={classNames(
                "flex items-center p-[14px] shrink-0 flex-nowrap justify-center gap-[10px] h-[71px] rounded-[12px] w-full hover:bg-[#242424] cursor-pointer  group/li",
              )}
            >
              <div className=" flex items-center w-[32px] h-[32px] justify-center rounded-[8px] bg-[rgb(36,36,36)] group-hover/li:text-[#33C6AB] border border-[rgb(59,_59,_59)] group-hover/li:border-[#33C6AB] !fill-[#9B9CA1] group-hover/li:fill-[#33C6AB]    ">
                {item.icone}
              </div>
              <div className=" flex flex-col rounded-md  flex-1 ">
                <p className="text-[16px] font-dm_sans text-[#FBFBFB] text-left font-medium group-hover/li:text-[#33C6AB]	 ">
                  {item.title}
                </p>
                <p className="text-[14px] font-normal flex flex-nowrap leading-[1.2em] text-left  text-[#9B9CA1] ">
                  {item.subtitle}{" "}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
