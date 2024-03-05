"use client";
import { createSlice, PayloadAction, current, nanoid } from "@reduxjs/toolkit";

export type sss = {
  id: string;
  value: string;
};

// export type txtrefState = sss[];

const initialState = {
  str: [],
};

export const txtrefSlice = createSlice({
  name: "txtref",
  initialState,
  reducers: {
    pushtxt: (state: { str: sss[] }, action: PayloadAction<string>) => {
      console.log("current", current(state));

      state.str.push({
        id: nanoid(),
        value: action.payload,
      });
      console.log("current1", current(state));

      // console.log(state.str);
    },
    updatetxt: (state: { str: sss[] }, action: PayloadAction<sss>) => {
      console.log("current update", current(state));
      console.log("action payload", action.payload);

      state.str = state.str.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      console.log("current update 1", current(state));

      // const item = state.str.find((el) => el.id === action.payload.id);
      // console.log("update:", item.id, item.value);
    },
  },
});

export const { pushtxt, updatetxt } = txtrefSlice.actions;
// export const { increment, decrement, incrementByAmount } = counter.actions;

export default txtrefSlice.reducer;
