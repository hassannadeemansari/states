'use client'

import { useState } from 'react'

export default function FormPreview() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Form Input Preview</h1>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium">Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </label>
        </form>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Live Preview:</h2>
          <p><strong>Name:</strong> {name || '(nothing typed)'}</p>
          <p><strong>Email:</strong> {email || '(nothing typed)'}</p>
        </div>
      </div>
    </div>
  )
}








// 'use client'
// import { useState } from "react";
// import { IoAddOutline } from "react-icons/io5";
// import { RiSubtractFill } from "react-icons/ri";


// export default function States(){
 

//   const [value , setvalue] = useState(0)

//   function reset(){
//     setvalue(0)
//   }

//   function increment(){
//      setvalue(prev => prev+1)
//   }

//   function decrement(){
//     setvalue(prev => prev-1)
//   }
 
//   return (
//       <div className="w-screen text-white h-screen bg-blue-950 flex justify-center items-center">
//           <div className="w-[80%] bg-black flex justify-center gap-7">
//                    <IoAddOutline onClick={increment} className="h-10 w-[100px] border "/>
//                     <p className="w-[120px] bg-gray-400 text-black flex justify-between items-center">{value}</p>
//                     <div className="flex gap-5"> 
//                    <RiSubtractFill onClick={decrement} className="h-10 w-[100px] border" />
//                    <button onClick={reset} className="border"> reset</button>
//                </div>
//           </div>
//       </div>
//   )
// }