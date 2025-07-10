'use client'
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";


export default function States(){
 

  const [value , setvalue] = useState(0)

  function reset(){
    setvalue(0)
  }

  function increment(){
     setvalue(prev => prev+1)
  }

  function decrement(){
    setvalue(prev => prev-1)
  }
 
  return (
      <div className="w-screen text-white h-screen bg-blue-950 flex justify-center items-center">
          <div className="w-[80%] bg-black flex justify-center gap-7">
                   <IoAddOutline onClick={increment} className="h-10 w-[100px] border "/>
                    <p className="w-[120px] bg-gray-400 text-black flex justify-between items-center">{value}</p>
                    <div className="flex gap-5"> 
                   <RiSubtractFill onClick={decrement} className="h-10 w-[100px] border" />
                   <button onClick={reset} className="border"> reset</button>
               </div>
          </div>
      </div>
  )
}