import React from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

function MyApp(){
//THIS WILL ALSO WORK
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const Reactobject = {
//React doesn’t automatically accept plain JavaScript objects like ReactElement because it expects elements in JSX or as React.createElement calls.this code wont work .
    type:'a',
    props:{
    
      href:'https://google.com',
      target:'_blank'
    },
    children: 'google'
    }

//look down , tis text has been direcly added into the above code
const anotherUser = "add this text"


//The code you provided works because it uses React.createElement() to create a React element manually.
const ReactElement = React.createElement(

    //tag
    'a',

    //add attributes
    {href: 'https://yahoo.com', target:'_blank'},

    //direct text
    'ReactElement',
    
    ' middle ',

    anotherUser
)








//You need to either write your elements using JSX or manually use React.createElement() to convert the object into something React can render.
//THIS WILL WORK
    const AnotherEl = 
        <a href='https://google.com' target='_blank'>google</a>
    
//works because of JSX (JavaScript XML), a syntax extension for JavaScript commonly used in React. JSX is not valid JavaScript by itself, but it is transformed into JavaScript code that React can understand, typically by a tool like Babel during the build process.
//During the build process (usually using a tool like Babel), JSX is converted into React.createElement() calls.

    
    



createRoot(document.getElementById('root')).render(
  
    ReactElement
    
  
)
