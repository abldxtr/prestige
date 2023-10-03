import { ReactNode } from "react";
import { motion, spring } from "framer-motion";

interface typeanimate {
  children: ReactNode,
}
let base:number = 4;
let t = (d:number) => d*base;

const Motionlist: React.FC<typeanimate> = ({ children }) => {
  return (
    <motion.li className="relative" initial={{height:0, opacity:0}}
  animate={{height:"auto", opacity:1, transition: {
    type:"spring",
    bounce:0.3,
    opacity:{delay: 0.1}

  } }}
  
  >{children}</motion.li>
  )
};

export default Motionlist;
