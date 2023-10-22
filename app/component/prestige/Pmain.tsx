import { MdKeyboardArrowLeft } from "react-icons/md";
import P_button from "./P_button";

export default function Pmain() {
  return (
    <>
      <div>
        <a
          href="/"
          className="flex items-center gap-[8px] rounded-[32px] border border-[#236456] bg-[#112220] py-[4px] pl-[4px] pr-[8px]"
        >
          <div className="rounded-[64px] bg-[#33c6ab] px-[8px] py-[4px] text-[#FFFFFF]">
            <p>New</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="text-[14px] font-medium leading-[1.2] text-[#33c6ab]">
              Introducing AI Editor
            </div>
            <div>
              <div className="relative  text-[#33c6ab]">
                <MdKeyboardArrowLeft className="rotate-180 text-lg " />
              </div>
            </div>
          </div>
        </a>
      </div>

      <div>
        <h1 className="text-center text-[64px] font-semibold leading-[1] text-[#fbfbfb] ">
          The best way to build your startup.
        </h1>
      </div>
      <div>
        <p className=" text-center text-[21px] font-normal leading-[1.4] text-[#9b9ca1]">
          Our app eliminates the need for complex spreadsheets, endless email
          threads, empowering businesses to achieve greater efficiency.
        </p>
      </div>

      {/* button */}
      <P_button />
    </>
  );
}
