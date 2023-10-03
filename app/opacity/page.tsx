"use client";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import header from "../component/header";
import classNames from "classnames";

export default function Page() {
  // let mouseXx = useMotionValue(0);
  // let mouseYx = useMotionValue(0);

  // function handleMouseMove(e:MouseEvent) {
  //     let { left, top } = e.currentTarget.getBoundingClientRect()

  //     let xPosition = e.clientX - left;
  //     let yPosition = e.clientY - top;
  //     mouseXx.set(xPosition);
  //     mouseYx.set(yPosition);
  //   }
  type massege = string[];
  type msg = massege[];
  type mmm = {
    id: number;
    text: string;
  };

  const [highlight, sethighlight] = useState<number[]>([]);

  let [txt, settxt] = useState<mmm[]>([]);
  var addtxt: string[] = ["aaaaaaa", "bbbbbbb", "cccc", "ddddd"];
  var addnum: number[] = [121, 2332, 3453, 466654];
  let [findnum, setfindnum] = useState<number>(0);

  // var m : string = []
  function add(): any {
    setfindnum((perv) => (perv > addnum.length ? perv - 1 : perv + 1));
    var m: mmm = {
      id: Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10),
      text: addtxt[findnum],
    };
    if (m.id === undefined || !!txt.find((i) => i.id === m.id)) {
      console.log(m, txt);

      return;
    }
    console.log(m, txt);
    settxt([...txt, m]);
  }

  function remove(): any {
    settxt(txt.filter((i) => !highlight.includes(i.id)));
    sethighlight([]);
  }
  var arr: number[] = [];
  function sett(vorody: number): any {
    if (highlight.includes(vorody)) {
      sethighlight(highlight.filter((i) => i !== vorody));
    } else {
      sethighlight([...highlight, vorody]);
    }
  }
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-200   ">
        <div className="max-w-lg w-full h-[420px]">
          <div className="bg-white rounded-xl     ">
            <div className="flex justify-between items-center border-b-zink-100 border-b-[1px] p-4 ">
              <button
                className="text-zink-400 px-2 py-1 hover:text-zink-500 transition  "
                onClick={add}
              >
                Add
              </button>
              <button
                className="text-zink-400 px-2 py-1 hover:text-zink-500 transition  "
                onClick={() => {
                  remove();
                }}
              >
                Archive
              </button>
            </div>
            <ul></ul>

            <div className="max-h-[400px] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-thin py-2  ">
              <ul className="mx-2 rounded-medium">
                {[...txt].reverse().map((message, index) => {
                  return (
                    <li key={index}>
                      <div className=" py-0.5 transition">
                        <button
                          className={classNames(
                            "flex flex-col w-full p-4 rounded-md m-1 transition duration-300 ",
                            highlight.includes(message.id)
                              ? "bg-blue-300 hover:bg-blue-400"
                              : "bg-white hover:bg-gray-100",
                          )}
                        >
                          <p className="font-medium transiton ">
                            {message.id}{" "}
                          </p>
                          <span className="text-sm transition">
                            {message.text}{" "}
                          </span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
