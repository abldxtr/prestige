"use client";

// import { useSelector } from "@reduxjs/toolkit";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../component/redux/slices/counterSlice";
import { pushtxt, updatetxt } from "../component/redux/slices/txtref";

import { useState, useRef, useEffect } from "react";
import {
  RootState,
  AppDispatch,
  useAppSelector,
} from "../component/redux/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// import { useAppSelector } from "../hook/hocks";

export default function Page() {
  type opd = { id: number; value: string };
  const dispatch = useDispatch<AppDispatch>();
  const vvv = useAppSelector((state) => state.counter.value);
  // const ttt = useAppSelector((state) => state.txtrefSlice.str);
  // console.log("state", ttt);
  const txt = useRef<HTMLInputElement>(null);
  const [on, seton] = useState(true);
  const [tmp, settmp] = useState(0);
  const [tmpstr, settmpstr] = useState("");
  const [tmpobj, settmpobj] = useState({ id: 0, value: "" });
  const [tmpdis, settmpdis] = useState("Add");
  const [tmpid, settmpid] = useState(0);
  const [tttt, settttt] = useState<opd>([]);
  const ttt = useAppSelector((state) => state.txtrefSlice.str);

  // settttt(ttt);

  const handleuseref = () => {
    settmpdis("Add");

    dispatch(pushtxt(tmpstr));
    txt.current.value = null;
  };
  const handleupdate = (item: opd) => {
    settmpdis("Update");
    const { id, value } = item;

    console.log("item", item);
    console.log("item1", id, value);

    settmpid(id);
    settmpstr(value);

    txt.current.value = value;
  };
  const [type, settype] = useState("Add");
  function updatedis() {
    dispatch(updatetxt({ id: tmpid, value: tmpstr }));
    console.log("useeffect");
  }

  useEffect(() => {
    updatedis();
  }, [tmpdis]);
  // console.log(ttt);
  return (
    <>
      <div>
        <div>
          <button
            onClick={() =>
              addTasks({
                title: title,
                status: status,
                type: type,
                ...(type !== "Add" && { id: data.id }),
              })
            }
            className=""
            type="button"
          >
            {type === "Add" ? "Add Task" : "Update Task"}
          </button>
        </div>
        <div className="flex gap-6">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{vvv}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <div className="blcok">
            <button onClick={() => dispatch(incrementByAmount(10))}>
              add fav
            </button>
            <button
              onClick={() => {
                seton((p) => !p);
              }}
            >
              add fav
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="msg"
            id="one"
            // value={tmpdis === "update" ? tmpstr : ""}
            ref={txt}
            onChange={(e) => settmpstr(e.target.value)}
            className="rounded-md bg-gray-200 py-2 px-4 border border-gray-300"
          />
          <button onClick={handleuseref}>inspect</button>
          <button onClick={updatedis}>update</button>
        </div>
        <ul className="flex gap-x-4">
          {ttt.map(
            (item, index) =>
              item.value !== "" && (
                <li key={index} onClick={() => handleupdate(item)}>
                  {item.value}
                </li>
              ),
          )}
        </ul>
      </div>
    </>
  );
}
