import { SiKeystone } from "react-icons/si";
import { CiBullhorn } from "react-icons/ci";
import { AiOutlineArrowUp } from "react-icons/ai";
import classNames from "classnames";
import {
  CgPolaroid,
  CgPresentation,
  CgPrinter,
  CgSlack,
  CgSmartHomeBoiler,
  CgSmartHomeCooker,
  CgTally,
} from "react-icons/cg";

export default function Other_featurs_items() {
  type f_items = {
    img: string[] | React.ReactNode[];
    header: string;
    text: string;
  };
  const feats_items: f_items[] = [
    {
      img: [
        "https://framerusercontent.com/images/2XGDkHUix0epuHXVoERY1hb3by8.png",
      ],
      header: "Dashboard",
      text: "Our interactive dashboard provides an all-encompassing view of your projects, tasks, and collaborations. Monitor deadlines, track milestones, and stay updated on team activities.",
    },
    {
      img: [
        "https://framerusercontent.com/images/NqO9meW9HeX05H8ZgW4XFITuLrA.png",
      ],
      header: "Simple analytics",
      text: "Make informed decisions backed by data through our analytics tools.",
    },
    {
      // img: [<CgPresentation />, <CgPresentation />],
      img: [""],
      header: "Keyboard shortcuts",
      text: "Take control of your workflow and tasks with our intuitive keyboard shortcuts.",
    },
    {
      // img: [<CgSmartHomeBoiler />],
      img: [""],

      header: "Edit together",
      text: "Boost efficiency and ensure accuracy as you collectively refine your work.",
    },
    {
      img: [
        "https://framerusercontent.com/images/yulEa3NmoSWAEqkLbPpkngnGN0.png",
        "https://framerusercontent.com/images/HnGuBDJggDB1ToZs9w6c2o8kEe8.png",
        "https://framerusercontent.com/images/8RmU8J3M24uuREshsnYeVxWlgoQ.png",
        "https://framerusercontent.com/images/kIc1rOcumToPSAjiYXIWdWYFMo.png",
        "https://framerusercontent.com/images/r9F0B6SFfgSyAOJsqCeT5LcoFQ.png",
      ],
      header: "Easy collaboration",
      text: "Seamlessly collaborate with your team members like never before.",
    },
  ];

  return (
    <>
      {feats_items.map((item, ii) => {
        return (
          <div
            key={ii}
            className={classNames(
              "p-[40px] group/nem rounded-[24px] border border-[rgb(36,36,36)] bg-[rgb(22,22,22)] first:col-span-2  ",
              "col-span-2 sm:col-span-1",
              // ii === 1 && "col-span-1  ",
              // ii === 2 && "col-span-1 ",
              // ii === 3 && "col-span-1 ",
            )}
          >
            <div className="flex flex-col gap-[32px]  ">
              {/* border border-[rgb(36,36,36)] h-[264px] bg-[rgb(26,26,26)]*/}
              {/* first 1 */}
              <div
                className={classNames(
                  "  overflow-hidden relative h-[264px]   rounded-[12px] ",
                  ii === 0 && "border border-[rgb(36,36,36)]",
                  ii === 1 && "border border-[rgb(36,36,36)]",
                )}
              >
                <div className=" w-full h-full relative ">
                  <div
                    className={classNames(
                      "  ",
                      ii === 0 && "group/shine relative w-full h-full ",
                      ii === 1 && "w-full  relative",
                      ii === 2 && "w-full h-full  relative",
                      ii === 3 && "w-full h-full  relative",
                      ii == 4 &&
                        "aspect-square mx-auto h-full flex items-center p-6 justify-center  border border-[rgb(36,_36,_36)] rounded-full bg-[rgb(23,_23,_23)]  ",
                    )}
                  >
                    {ii === 0 && (
                      <>
                        <div
                          className={classNames(
                            " absolute inset-0 w-[1188px] z-10  -top-[356px] -bottom-[169px] -left-[517px] opacity-0 group-hover/shine:opacity-100 transition-all duration-[2s] ",
                          )}
                        >
                          <div className="absolute inset-0">
                            <img
                              src="https://framerusercontent.com/images/a1VxQ3Aj8bMvKwTTNc1HpAAXto.png"
                              alt="shine"
                              className="object-cover object-center w-full h-full "
                            />
                          </div>
                        </div>
                        {typeof item.img[0] === "string" && (
                          <div className="relative w-full h-full">
                            <div className=" w-[89%]  h-[517px] mx-auto relative ">
                              <div className="absolute inset-0 ">
                                <img
                                  src={item.img[0]}
                                  alt="first"
                                  className="w-full h-full object-center object-contain    "
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {ii === 1 && (
                      <div className=" px-[32px] pt-[12px] h-[264px] relative flex flex-col flex-start w-full ">
                        <div className="flex items-center text-[#33c6AB] gap-[8px] justify-start ">
                          {/* icone */}
                          <div className="w-[24px] flex items-center justify-center h-[24px] rounded-full border border-[rgb(35,100,86)] bg-[rgb(17,34,32)] ">
                            <AiOutlineArrowUp />
                          </div>
                          {/* txt */}
                          <div className="flex flex-col pt-[21px]   ">
                            <p className="text-[14px] group-hover/nem:-translate-y-[20px] group-hover/nem:opacity-0 transition duration-300  ">
                              14.12%
                            </p>
                            <p className="invisible  text-[14px] group-hover/nem:-translate-y-[20px] group-hover/nem:visible duration-300 group-hover/nem:opacity-100 transition">
                              21.40%
                            </p>
                          </div>
                        </div>
                        {/* img */}
                        <div className="absolute aspect-[1.9467312348668282/1] h-[212px] group-hover/nem:-translate-x-[90px] transition duration-[500ms] origin-[50%_50%_0] -bottom-[11px] -left-[21px]  ">
                          <div className="absolute inset-0  ">
                            {typeof item.img[0] === "string" && (
                              <img
                                src={item.img[0]}
                                alt="features"
                                className="w-full h-full object-cover object-center scale-125 sm:scale-100  "
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {ii === 2 && (
                      <div className="flex items-center justify-center w-full h-full ">
                        <div className="w-[180px] h-[140px] bg-[rgb(26,26,26)] border border-[rgb(34,34,34)] rounded-[12px] ">
                          <div className="flex flex-col items-center justify-center h-full gap-[24px] ">
                            {/* first */}
                            <div className="flex gap-[10px] items-center justify-center ">
                              {/* 1 */}
                              <div className="w-[64px] h-[64px] flex items-center justify-center bg-[radial-gradient(59.2%_59.2%_at_50%_50%,_rgb(43,_43,_43)_0%,_rgb(26,_26,_26)_100%)] cursor-pointer border border-[rgb(36,36,36)] rounded-[8px] ">
                                <SiKeystone className="fill-[rgb(155,156,161)]  w-[24px] h-[24px] " />
                              </div>
                              {/* 2 */}
                              <div className="w-[64px] h-[64px] flex items-center justify-center  bg-[radial-gradient(59.2%_59.2%_at_50%_50%,_rgb(43,_43,_43)_0%,_rgb(26,_26,_26)_100%)] cursor-pointer border border-[rgb(36,36,36)] rounded-[8px] ">
                                <CiBullhorn className="fill-[rgb(155,156,161)] w-[24px] h-[24px] " />
                              </div>
                            </div>

                            {/* second */}
                            <div>
                              <p className="text-[14px] text-[rgb(155,156,161)] ">
                                Command menu
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {ii === 3 && (
                      <div className="flex pt-[24px] pl-[24px]   border border-[rgb(36,36,36)] rounded-[12px] bg-[rgb(26,26,26)] h-[264px]">
                        <div className=" flex flex-col  justify-start gap-[16px]  ">
                          <p className="text-[rgb(251,251,251)] leading-[1.4em] text-left text-[16px] ">
                            Prepare pitch for{" "}
                          </p>
                          <div className="flex gap-[8px] flex-col pl-[16px] ">
                            <p className="text-[rgb(155,156,161)] text-[14px] ">
                              The market opportunity
                            </p>
                            <p className="text-[rgb(155,156,161)] text-[14px] ">
                              How the product works
                            </p>
                            <p className="text-[rgb(155,156,161)] text-[14px] ">
                              Our business model
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex -space-x-5 items-center h-full w-full justify-center z-10 border border-[rgb(36,_36,_36)] rounded-full bg-[rgb(26,_26,_26)] ">
                      {ii == 4 &&
                        [
                          "https://framerusercontent.com/images/yulEa3NmoSWAEqkLbPpkngnGN0.png",
                          "https://framerusercontent.com/images/HnGuBDJggDB1ToZs9w6c2o8kEe8.png",
                          "https://framerusercontent.com/images/8RmU8J3M24uuREshsnYeVxWlgoQ.png",
                          "https://framerusercontent.com/images/kIc1rOcumToPSAjiYXIWdWYFMo.png",
                          "https://framerusercontent.com/images/r9F0B6SFfgSyAOJsqCeT5LcoFQ.png",
                        ].map((img, index) => {
                          return (
                            <>
                              <img
                                key={index}
                                src={img}
                                alt="features"
                                className=" w-[40px] h-[40px] rounded-full  "
                              />
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>

              {/* second */}
              <div className="flex flex-col gap-[10px] ">
                <div>
                  <h5 className="text-[#FBFBFB] text-[16px] font-bold   ">
                    {item.header}
                  </h5>
                </div>
                <div>
                  <p className=" text-[#9b9ca1] text-[16px] font-normal  ">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
