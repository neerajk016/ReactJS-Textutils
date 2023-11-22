
// JSX==javascript XML


// React Components:
// React has two types of Components:

// Function-based Component: In short they are the JavaScript functions. Nowadays, Function-based components are primarily used.
// Class-based Component: They are quite complex than the function-based component as the class components can work with each other.

index.js
import React from "React";
import ReactDOM from "react-dom";
ReactDOM.render(<h1>helloworld</h1>,document.getElementById("root"));





index.js
import React from 'react';
import ReactDom from 'react-dom';
ReactDom.render(<div><h1>Hello world!</h1><p>This is a Paragraph</p></div>,document.getElementById("root"));




index.js
import React from 'react';
import ReactDOM from 'react-dom';
function myapp(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}
ReactDOM.render(<myapp/>,document.getElementById("root"));


index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Myinfo from "./Myinfo.js";
ReactDOM.render(<Myinfo/>,document.getElementById("root"));

Myinfo.js
import React from "react";
let name="dasda";
function myapp(){
    return(
        <div>
            <h1>Hello world{name}!</h1><p>This is a Paragraph</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}export default myapp;




// function app(){
//     return(

//     );
// };


// function app() {
//     return (
//         <>
//             <nav>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact us</li>
//             </nav>
//             <div className="container">
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//             </div>
//         </>
//     );
// };