"use client";

import { configureStore, useDispatch } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import txtrefSlice from "./slices/txtref";
import userpageSlice from "./slices/userpageSlice";

import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    txtrefSlice,
    userpage: userpageSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
