import { useState } from "react"


function App() {
 const [color, setColor] = useState("brown") //made a useState

  return (
    
      <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

     <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-7 py-3 rounded-2xl">

        <button onClick={()=>setColor("red")}//here we call the useState
         className="cursor-pointer outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>setColor("green")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor("blue")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Blue"}}>Blue</button>

        <button onClick={()=>setColor("yellow")} className="outline-none px-7 py-3 rounded-3xl text-black font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Yellow"}}>Yellow</button>

        <button onClick={()=>setColor("black")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Black"}}>Black</button>

        <button onClick={()=>setColor("orange")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Orange"}}>Orange</button>

        <button onClick={()=>setColor("pink")} className="outline-none px-7 py-3 rounded-3xl text-black font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Pink"}}>Pink</button>
        
        <button onClick={()=>setColor("purple")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Purple"}}>Purple</button>

        <button onClick={()=>setColor("olive")} className="outline-none px-7 py-3 rounded-3xl text-white font-bold text-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.8)] transition-shadow"
        style={{backgroundColor:"Olive"}}>Olive</button>
      </div>
     </div>

      </div>
  
    
  )
}

export default App
