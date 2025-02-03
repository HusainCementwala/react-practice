import { useState, useCallback, useEffect, useRef} from 'react'



function App() {

  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")


  //useRef hook === This line creates a ref using the useRef hook, which is used to reference the input field where the password is displayed.
  const  passwordRef = useRef(null)


  // useCallback is used to memoize the function so that it is not re-created
// unnecessarily on every render unless its dependencies change.
const passwordGenerator = useCallback(() => {
  let pass = ""; // Initialize an empty string to store the generated password
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base character set (uppercase & lowercase letters)

  // If the user allows numbers, add digits 0-9 to the character set
  if (numberAllow) str += "0123456789";  

  // If the user allows special characters, add them to the character set
  if (charAllow) str += "!@#$%^&*()_-+=<>?/:;[]{},.~";

  // Loop through 'length' times to generate a random password
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length); // Get a random index from the character set
    pass += str.charAt(char); // Append the randomly selected character to 'pass'
  }

  // Update the password state with the newly generated password
  setPassword(pass);
  
  // Dependencies: This function will only re-run if 'length', 'numberAllow', or 'charAllow' changes.
}, [length, numberAllow, charAllow]);


// Function to copy the generated password to the clipboard
// 1. Selects the password text inside the input field
// 2. Sets the selection range to cover the full password length
// 3. Copies the selected text to the user's clipboard
const copyPassword = useCallback(() => {
  passwordRef.current?.select(); // Select the entire password text
  passwordRef.current?.setSelectionRange(0, length); // Ensure the correct selection range
  window.navigator.clipboard.writeText(password); // Copy password to clipboard
}, [password]);




  // useEffect is used to automatically generate a password when
// any of the dependencies (length, numberAllow, charAllow) change.
useEffect(() => {
  passwordGenerator(); // Call the password generator function whenever settings change
}, [length, numberAllow, charAllow, passwordGenerator]); 
// Dependency array ensures this effect runs only when one of these values is updated.



  
  return (
    
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-amber-700 bg-gray-800 '>
      <h1 className='text-3xl text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white my-3">
        <input 
          type="text"
          value={password}
          className="outline-none border-none w-full py-1 px-3 text-gray-900" 
          placeholder='Your pass is ...'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPassword} 
        className='outline-none border-none bg-blue-700 text-white px-3 py-0.5 
        hover:bg-blue-950
        active:bg-blue-400'>Copy</button>
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


/*
Hook	Purpose

useState => Manages the state for password settings (length, numbers, characters, password).

useCallback =>	Prevents passwordGenerator from being re-created unnecessarily.(memoization)

useEffect =>	Runs passwordGenerator automatically when settings change.

useRef => allows direct manipulation of the input field without causing a re-render.
*/
