// import { SiFramer } from "react-icons/si";

export default function P_seq() {
  const icone = [
    "https://dub.co/_static/clients/crowd.svg",
    "https://dub.co/_static/clients/perplexity.svg",
    "https://dub.co/_static/clients/cal.svg",
    "https://dub.co/_static/clients/hashnode.svg",
    "https://dub.co/_static/clients/prisma.svg",
    "https://dub.co/_static/clients/attio.svg",
  ];
  return (
    <>
      <div className="max-w-6xl pt-[100px] mx-auto px-6 lg:px-8 mt-100 flex flex-col w-full gap-[10px] ">
        <div>
          <h5 className=" font-semibold text-[18px]   ">
            Trusted by the world leaders
          </h5>
        </div>
        <div className="  grid grid-cols-2 place-items-center	 md:grid-cols-6 w-full mx-auto pt-[10px] gap-4  ">
          {/* <div className="flex w-[97px] h-[40px] items-center justify-center gap-2 ">
            <SiFramer className="h-[60px] w-auto " />{" "}
            <span className=" text-lg font-bold ">Framer</span>
          </div> */}
          {icone.map((item, index) => {
            return (
              <div className="" key={index}>
                <img
                  src={item}
                  alt="icone"
                  className=" w-auto h-[60px] grayscale "
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
