import { Children, ReactNode } from "react";

type child = {
  children: ReactNode
};

const Provider: React.FC<child> = ({children}) => {
  return <div>{children}</div>;
};

export default Provider;
