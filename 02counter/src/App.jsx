import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  //let counter=0;

  const addValue =()=>{
    //counter++;
    if(counter<=19){
  
    setCounter((presCounter)=>presCounter + 1)

    setCounter((presCounter)=>presCounter + 1)

    setCounter((presCounter)=>presCounter + 1)

    //setCounter(counter+1)

    /*
    Detailed explaination of why does first syntax only updates the count once:
Initial State: Assume count is initially 69.
First Call: setCount(count + 1) schedules a state update to set count to 70 (69 + 1).
Second Call: setCount(count + 1) schedules another state update to set count to 70 (69 + 1), because count is still 69 in this scope.
Third Call: setCount(count + 1) schedules yet another state update to set count to 70 (69 + 1), again because count is still 69 in this scope.

In case of functional updater syntax React ensures that changes are made to the latest state of the count hence each function gets access to the latest state of the count variable:
First Call: setCount(count =>count+1) schedules a state update to set count to 70
Second Call : schedules a state update to set count to (70+1) because count is now 70 in this scope and so on...


    */
    
    }
    else{
      
      alert("now only decrease");
      return;
    }
    
  }

  const subValue = ()=>{

    if(counter >=1){
 counter = counter -1 
    setCounter(counter)

    }
    else{
      alert("now only increase");

      return;
    }
   
  }

  return (
    <>
      
      <h1>Husain aur Paisa</h1>
      <h2>Counter Value: {counter}</h2>

      <button className='add' onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Remove Value {counter}</button>
     
    </>
  )
}

export default App
