
function customRender(reactElement,container){

  /*
  const domElement = document.createElement(reactElement.type)
  //Creates a new DOM element based on the type property of reactElement (e.g., <a> for an anchor tag).

  domElement.innerHTML = reactElement.children
  //Sets the inner content of the created element (in this case, the text "Click me").

  domElement.setAttribute('href', reactElement.props.href)
  //Adds the href attribute to the element and assigns its value (https://google.com in this example).

  domElement.setAttribute('target', reactElement.props.target)
  //Adds the target attribute to the element and assigns its value (_blank to open in a new tab).

  container.appendChild(domElement)
  //Appends the newly created and configured element to the provided container.
  */

  //Problem: Your code only supports rendering a single-level element (e.g., <a> with text content). It does not support nested children or component hierarchies. Your renderer would fail to handle the array of children.

  /***********WRITE BETTER CODE*************/


  //This modified function introduces a for...in loop that iterates over all the properties of reactElement.props. This makes the function more flexible and dynamic compared to manually specifying attributes like href and target.
  const domElement = document.createElement(reactElement.type)

  domElement.innerHTML = reactElement.children


  //This dynamically handles any number of properties without requiring changes to the function.
  for (const prop in reactElement.props) {
    
    if(prop == 'children'){
      continue;//The if condition (if (prop == 'children') { continue; }) ensures the loop ignores the children property, which isn’t a DOM attribute. This avoids unnecessary setAttribute calls for invalid properties.
    }


    domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
  }


const reactElement = {
type:'a',
props:{

  href:'https://google.com',
  target:'_blank'
},
children: 'Click me'
}

const mainContainer = document.getElementById("root");


customRender(reactElement, mainContainer)



/*
How This Mimics React?
React also takes a JavaScript object (called a React element) and transforms it into a real DOM node.
Your customRender function does this transformation manually:
Interpreting type, props, and children.
Creating and updating DOM nodes accordingly.
In real React, this process involves reconciliation, virtual DOM, and optimized updates, which make React efficient.

*/ 