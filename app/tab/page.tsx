"use client";

import Tab from "../component/Tap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
interface fff {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const [filter, setfilter] = useState(false);
  const {
    data: nnn,
    isLoading,
    refetch,
  } = useQuery<fff>({
    queryKey: ["todos"],
    queryFn: async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      // if (!result.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const res = result.json();
      console.log("result", typeof result.data);
      console.log("result", result.data);

      return result;
    },
    enabled: filter,
  });
  // setd(data);
  console.log("nnn", typeof nnn?.data);
  console.log("nnn", nnn?.data);

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <>
      <div>
        <button className="block" onClick={() => refetch()}>
          Fetch Todos
        </button>
        <button onClick={() => setfilter((p) => !p)}>filter{filter}</button>
        {filter ? <div>active</div> : <div>disable</div>}
        {/* {nnn.data.title} */}

        {nnn?.data.map((item, index) => {
          <div key={index}>{item.title}</div>;
        })}
      </div>
    </>
  );
}

// const {data} = useQuery({
//   queryKey: ['products'],

//   queryFn: async () => {
//     const res = await axios.get(
//       'https://fakestoreapi.com/products'
//     )
//     const data = await res.data
//     console.log(data)
//     //can access data here
//   }
// })

// const Home = () => {
//   const { data } = useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       return res.data;
//     },
//   });

//   return <section>{/* some codes here */}</section>;
// };
