import { CgTally } from "react-icons/cg";
import Other_featurs_items from "./Other_featurs_items";

export default function Other_featurs() {
  return (
    <div className="flex flex-col max-w-[1280px] mx-auto gap-[96px] p-[30px]  ">
      {/* first col */}
      <div className="max-w-[768px] mx-auto text-center ">
        <div className="flex flex-col gap-[16px] items-center ">
          {/* text icone */}
          <div className="flex items-center w-min justify-center gap-[4px] py-[8px] px-[12px] rounded-[32px] border border-[#236456] bg-[#112220] ">
            <div className="text-[#33c6ab] ">
              <CgTally />
            </div>
            <div className="text-[#33c6ab] text-[14px]  ">Features</div>
          </div>

          {/* text h */}
          <div>
            <h2 className=" md:text-[48px] text-[32px] text-[#FBFBFB] font-semibold ">
              And many other features
            </h2>
          </div>

          {/* text p */}
          <div>
            <p className="text-[#9b9ca1] text-[18px] font-normal  ">
              We take immense pride in presenting you with a comprehensive array
              of powerful tools and capabilities that are designed to elevate
              your experience and help you achieve more.
            </p>
          </div>
        </div>
      </div>
      {/* second col */}

      <div className="w-full  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[32px] w-full ">
          <Other_featurs_items />
        </div>
      </div>
    </div>
  );
}
