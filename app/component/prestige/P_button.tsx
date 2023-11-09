import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

export default function P_button() {
  return (
    <div className="py-[64px] w-full">
      <div className="flex items-center flex-col sm:flex-row justify-center gap-[32px] text-center">
        <Link
          href="/"
          className="flex items-center text-[rgb(15,_15,_15)] font-semibold
           rounded-[64px] gap-[4px] border border-[rgb(0,0,0,0)] bg-[#fbfbfb] pr-[23px] pl-[29px] py-[17px] "
        >
          Get started
          <MdKeyboardArrowLeft className="rotate-180  w-[22px] h-[22px]  " />
        </Link>
        <div className="group flex items-center justify-center gap-[4px]">
          <a href="/" className="doc group-hover:text-[rgb(78,77,81)]">
            Documentation{" "}
            <MdKeyboardArrowLeft className="rotate-180 transition duration-300  w-[22px] h-[22px] text-white group-hover:text-[rgb(78,77,81)] " />
          </a>
        </div>
      </div>
    </div>
  );
}
