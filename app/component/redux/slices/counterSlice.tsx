"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(state.value);
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        console.log(state.value);
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      console.log(state.value);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export const { increment, decrement, incrementByAmount } = counter.actions;

export default counterSlice.reducer;
