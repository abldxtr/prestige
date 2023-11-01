"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type child = {
  children: ReactNode;
};

const Providers = ({ children }: child) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
