import Image from "next/image";

const img_items = [
  "https://framerusercontent.com/images/CdWRZxBFdhlP1tIE0RR5Tt4tFA.jpg",
  "https://framerusercontent.com/images/hbice2K4dUwn3rowBl7xLxV62I.jpg",
  "https://framerusercontent.com/images/xQmFQbr3GD14cTuhT4MnrTcyTJo.jpg",
  "https://framerusercontent.com/images/j9E3eSqTxsvlz06uSvNtPPoM.jpg",
];

export default function Pavatar_pic() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-[8px] ">
          <div className="m-[5px] flex min-h-[40px] min-w-[100px] items-center justify-center">
            {img_items.map((item, index) => {
              return (
                <div key={index} className="avatar -ml-[12px]  ">
                  <Image
                    src={item}
                    alt="avatr"
                    className="img_avatar"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
          {/* text */}
          <div>
            <div>
              <p className="text-[14px] text-[rgb(155_156_161)]">
                <span className="f600">1,200+</span> reviews (
                <span className="f600">4.9</span> of{" "}
                <span className="f600">5</span>)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
