import { useState, useCallback } from 'react'



function App() {

  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(
    ()=>{

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

         if(numberAllow) str += "0123456789"  //shorthand notation
         if(charAllow) str += "!@#$%^&*()_-+=<>?/:;[]{},.~"

          for(let i=1; i<= length ;i++){
         let char = Math.floor(Math.random() * str.length + 1)
            //+1 to avoid a zero value since we are flooring the number

            pass = str.charAt(char)
        }
        setPassword(password)
  }
  ,[length,numberAllow,charAllow, setPassword])


  
  return (
    
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-amber-700 bg-gray-800 '>
      <h1 className='text-3xl text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white my-3">
        <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-gray-900" 
          placeholder='Your pass is ...'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={5}
          max={30}
          value={length}
          className='cursor-pointer accent-blue-500'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllow}
          id='numberInput'
          className='w-5 h-5 accent-blue-500'
          onChange={() => {
            setNumberAllow((prev) => !prev);
            //reverses the previous value
          }} />
          <label htmlFor="numberInput">Numbers</label></div>

          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='charInput'
          className='w-5 h-5 accent-blue-500'
          onChange={() => {
            setCharAllow((prev) => !prev);
            //reverses the previous value ie true or false
          }} />
          <label htmlFor="charInput">Characters</label></div>
      </div>
    </div>
      
  )
}

export default App
