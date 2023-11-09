"use client";

import Tab from "../component/Tap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../type";

import {
  RootState,
  AppDispatch,
  useAppSelector,
} from "../component/redux/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { pushuser } from "../component/redux/slices/userpageSlice";

interface fff {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function getpage(page) {
  const {
    isLoading,
    error,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async (page) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${page}`,
      );
      // const rr = await JSON.stringify(res.data);

      console.log("res", rr);
      // setresultt(res.data);
      return rr;
    },

    // console.log(data);
  });
  // setnext((p) => p + 1);
}
export const useFetchUser = (userID: string | undefined) => {
  console.log("id", userID);
  return useQuery<User, Error>({
    queryKey: ["jsonplaceholder/users", userID],
    queryFn: async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userID}`,
      );
      console.log("ress", res);
      return res.data;
    },
  });
  // console.log(data);
  // return data;
};

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const usr = useAppSelector((state) => state.userpage.user);
  const [filter, setfilter] = useState(false);
  const [resultt, setresultt] = useState();
  const [next, setnext] = useState(1);
  const { data, isLoading } = useFetchUser(next);
  console.log("dataa", data);
  // if (data) {
  //   dispatch(pushuser(data));
  // }
  // setresultt(usr);
  useEffect(() => {
    // data && dispatch(pushuser(data));
    // setresultt(useFetchUser(next));
    console.log("resultt", next);
  }, [next]);

  // console.log("resultt", resultt);
  // const call = getpage(next);

  // if (isLoading) {
  //   return <div>isloading</div>;
  // }

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
      <button
        onClick={() => {
          dispatch(pushuser(data));
          setnext((p) => p + 1);
        }}
        // disable={isloading ? true : false}
      >
        {next}next
      </button>
      <pre>{isLoading && "loading"}</pre>
      <div>
        {usr?.map((item, index) => {
          return item.id;
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

// const { data } = useQuery<User, Error>(["jsonplaceholder/users"], () =>
//   axios
//     .get(`https://jsonplaceholder.typicode.com/users/1`)
//     .then((response) => response.data),
// );
// const { data } = useFetchUser(1);
// const { data } = useQuery("fetchData", fetchData, {
//   onSuccess: (data) => {
//     console.log("Get data!");
//     console.log(data);
//   },
// });
// setd(data);
// console.log("nnn type", typeof data);
// console.log("nnn", data);
