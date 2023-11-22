#index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app"/>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>React App</title>
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div> 
  </body>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</html>













#index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












#App.js

import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
      <>
      
      <Navbar title="Textutils" about="About" />
      
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze"/> 
      </div>

      <About/>
         
      </>
  );
};
export default App;
















#Navbar.js

import React from "react"
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.about}</a>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>)
}

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    about:PropTypes.string.isRequired}


Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About text here'
};


















#Textform.js

import React, { useState } from "react";
export default function Textform(props){
    const[text,setText]=useState('enter text here');


    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        // setText("new text")
        setText(newText)
    }

    const handledownClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        // setText("new text")
        setText(newText)
    }

    
    const handleonchange=(event)=>{
        console.log("on change");
        // console.log(event.target.value)
        setText(event.target.value)

    };

    const handleCopy = () => {
        console.log('iam a happy')
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

        


        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleclear = () => {
        setText("")
    }


    
    
    return(
        <>
        <div className="container">
            {/* <h1>{props.heading}-{text}</h1> */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} value={text} rows={8} id="mybox"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} charecters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h1>Preview</h1>
            <p>{text}</p>

        </div>
        
        
        </>
        

    )
}



















#About.js

import React ,{useState} from 'react'

export default function About() {

  const [mystyle, setmystyle] = useState({
      color:'black',
      backgroundColor:'white'
     })

  // let mystyle={
  //   color:'white',
  //   backgroundColor:'black'
  // }

  const[btntext,setbtntext]=useState("Enter Dark Mode")

  const toggleStyle=()=>{
    if(mystyle.color==='black'){
      setmystyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
      })
      setbtntext("Enter Light Mode")
    }else{
      setmystyle({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black'
      })
      setbtntext("Enter Dark Mode")

    }

  }


  return (
    <div className='container' style={mystyle}>
      <h1 className='my-2'>About us</h1>
      <div className="accordion" id="accordionExample" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={mystyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={mystyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={mystyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      </div>
      <button onClick={toggleStyle} className='btn btn-primary my-3'>{btntext}</button>
    </div>
  )
}
