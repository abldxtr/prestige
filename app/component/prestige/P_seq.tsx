import { SiFramer } from "react-icons/si";

export default function P_seq() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-100 flex flex-col w-full gap-[10px] ">
        <div>
          <h5>Trusted by the world leaders</h5>
        </div>
        <div>
          <div className="flex w-[97px] h-[40px] items-center justify-center gap-2 ">
            <SiFramer className="h-[60px] w-auto " />{" "}
            <span className=" text-lg font-bold ">Framer</span>
          </div>
        </div>
      </div>
    </>
  );
}
