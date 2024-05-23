"use client";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
// import classNames from "classnames";

export default function Footer() {
  type dp = {
    header: string;
    body: string[];
  };
  const dp_menus: dp[] = [
    {
      header: "Prestige",
      body: [],
    },
    {
      header: "Product",
      body: ["Pricing", "Features", "Integrations", "Changelog"],
    },
    {
      header: "Company",
      body: ["About", "Blog", "Customers", "Careers"],
    },
    {
      header: "Resources",
      body: ["FAQ", "Contact", "Terms of service", "Privacy policy"],
    },
  ];

  return (
    <>
      <div className="max-w-[1280px] mx-auto  ">
        <div className="flex flex-col w-full md:p-[40px] p-[20px] ">
          <div className="sm:p-[32px] p-0 w-full flex sm:flex-row flex-col gap-[56px] sm:gap-0 ">
            {dp_menus.map((item, index) => {
              return (
                <div key={index} className="flex sm:flex-row flex-col flex-1  ">
                  <ul className="flex flex-col flex-1 gap-[16px]  ">
                    <div className="text-[16px] text-[rgb(251,251,251)] cursor-normal ">
                      {item.header}
                    </div>
                    {item.body.map((itemm, index) => {
                      return (
                        <li key={index} className="!p-0 text-[rgb(155,156,161)] hover:text-[rgb(251,251,251)] transition cursor-pointer  ">
                          {itemm}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            {/* two */}
          </div>
          <div className="pt-[30px] border-t border-[rgb(22,22,22)]  flex items-center flex-col md:flex-row gap-[24px] md:gap-0 justify-between ">
            {/* left */}
            <div>
              <p className="text-[rgb(155,156,161)] text-[14px] ">
                © 2023 Prestige. All rights reserved.
              </p>
            </div>
            {/* right */}
            <div className="flex items-center gap-[16px]  ">
              {/* <BsTwitterX /> */}
              <FaLinkedin className="w-[18px] h-[18px] fill-gray-400 hover:fill-gray-100 transition cursor-pointer  " />
              <FaGithubSquare className="w-[18px] h-[18px] fill-gray-400 hover:fill-gray-100 transition cursor-pointer  " />
              <FaDiscord className="w-[18px] h-[18px] fill-gray-400 hover:fill-gray-100 transition cursor-pointer  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
