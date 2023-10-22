import Pavatar_pic from "./component/prestige/Pavatar_pic";
import Pmain from "./component/prestige/Pmain";
import Features from "./component/prestige/Product-features/Features";
import Features_3 from "./component/prestige/Product-features/Features_3";
import Other_featurs from "./component/prestige/Product-features/Other_featurs";
import P_img from "./component/prestige/P_img";
import P_seq from "./component/prestige/P_seq";

export default function Home() {
  return (
    <>
      <main className="relative h-full w-full bg-[rgb(15_15_15)]">
        {/* <!-- main --> */}

        <div className="relative   bg-blue-400">
          <div className="bgmain absolute h-[800px] inset-x-0   " />

          <div className="mx-w-[1200px] mx-auto bg-[rgb(15,15,15)] px-[30px] pt-[200px] pb-[120px]">
            <div className="flex flex-col items-center gap-[40px]">
              <div className="z-10 relative w-full h-full text-center">
                <div className="flex flex-col items-center space-y-[24px] mx-auto max-w-[800px] w-[800px] px-8   ">
                  <Pmain />
                </div>

                <Pavatar_pic />
              </div>
              {/* <!-- image --> */}
              <div className=" ">
                <P_img />
              </div>
            </div>
          </div>
        </div>
        {/* sequence left */}
        <div className="z-50 relative text-white text-center mt-100 ">
          <P_seq />
        </div>
        {/* Product features */}
        <div className="py-[160px] ">
          <Features />
        </div>
        {/* And many other features */}

        <div className="py-[160px] ">
          <Other_featurs />
        </div>

        {/* and featurs 3  */}

        <div className="py-[160px] ">
          <Features_3 />
        </div>
      </main>
    </>
  );
}
