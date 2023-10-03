"use client"
import { useState } from "react"

export default function header(){
    type massege = {
        a:string,
        b:string
    }
    type msg = massege[]

    let [txt,settxt] = useState<msg>([])
    var m : msg = []
    function add() {
 
 settxt([...txt,{a:"hello",b:"your text"}])

    }
    return(
        <>
        <div className="bg-white rounded-xl ">
            <div className="flex justify-between items-center border-b-zink-100 border-b-[1px] p-4 ">
                <button className="text-zink-400 px-2 py-1 hover:text-zink-500 transition  "
                 onClick={add}>Add</button>
                <button className="text-zink-400 px-2 py-1 hover:text-zink-500 transition  ">Archive</button>
            </div>

            <div className="max-h-[400px] overflow-y-scroll py-2  ">
                <ul>
                    {txt.map((i)=>{
                        return(
                            <li>
                        <div className=" py-0.5 transition ">
                            <button className="flex flex-col p-4 rounded-md transition w-full">
                                <p className="font-medium transiton ">{i.a} </p>
                                <span className="text-sm transition">{i.b} </span>
                            </button>
                        </div>
                    </li>

                        );
                        
                    })}

                </ul>
            </div>



        </div>




{/*       {/* <main className="bg-gray-400">


            <div className="flex items-center justify-center">

                <div className="w- h-[320px] rounded-md border border-white/50 bg-gray-200 relative" 
                onMouseMove={handleMouseMove}
                >
                    
                    <motion.div className="w-20 h-20 bg-blue-300 absolute left-10 top-10 " style={{
                        opacity:useMotionTemplate`${mouseXx}`,

                    }}
                    >

                    </motion.div>


                </div>

            </div>



        </main> */} */}
        </>
    )
}