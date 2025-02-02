import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let thisobj = {

    name:"husian",
    age:40
  }

  let ARR= [1,2,22]

  return (
    <>
    <h1 className='bg-amber-600 text-2xl text-blue-500 rounded-3xl mb-5' >Husain Is the Name</h1>
   <Card username="chbc" button_name ="fuck more"/>
   <Card username="shit" />
   
  </>
      
  )
}

export default App
