"use client";
import { createSlice, PayloadAction, current, nanoid } from "@reduxjs/toolkit";

export type Usertype = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// export type txtrefState = sss[];

const initialState: Usertype = {
  user: [],
};

export const userpageSlice = createSlice({
  name: "userpage",
  initialState,
  reducers: {
    pushuser: (state, action: PayloadAction<Usertype>) => {
      console.log("current", current(state));

      state.user.push(action.payload);
      console.log("current1", current(state));

      // console.log(state.str);
    },
  },
});

export const { pushuser } = userpageSlice.actions;
// export const { increment, decrement, incrementByAmount } = counter.actions;

export default userpageSlice.reducer;
