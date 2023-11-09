import { CgTally } from "react-icons/cg";
import Features_items3 from "./Features_items3";

export default function Features_3() {
  return (
    <>
      <div className="mx-w-[1280px] mx-auto  ">
        <div className="flex flex-col gap-[96px] items-center justify-center px-[30px] ">
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
                  Other features
                </h2>
              </div>

              {/* text p */}
              <div>
                <p className="text-[#9b9ca1] text-[18px] font-normal  ">
                  Our platform is designed to provide you with an exceptional
                  user experience, catering to the needs of ambitious
                  professionals and visionary entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className="w-full  ">
            <div className="grid grid-cols-1 w-full ">
              <Features_items3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
