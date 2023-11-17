import { CgTally } from "react-icons/cg";
import Price_grid from "./Price_grid";

export default function Price() {
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
                Whether you're a small startup, a growing mid-sized business, or
                a large enterprise, we have plans tailored to your specific
                demands.
              </p>
            </div>
          </div>
        </div>

        {/* price tab */}
        <div className="flex items-center justify-center">
          <div>
            <h6 className="text-[16px] font-bold text-[rgb(251,251,251)]  ">
              Montly
            </h6>
          </div>
          <div>
            <h6>Yearly</h6>
          </div>
        </div>

        {/* second col */}
        <div className="w-full  ">
          <div className="flex items-center justify-between ">
            <Price_grid />
          </div>
        </div>
      </div>
    </div>
  );
}
