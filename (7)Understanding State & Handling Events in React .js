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
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
      <>
      
      <Navbar title="Textutils" about="About" />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze"/> 
      </div>
         
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    <button className="btn btn-outline-success" type="submit">Search</button>
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

    
    const handleonchange=(event)=>{
        console.log("on change");
        // console.log(event.target.value)
        setText(event.target.value)

    };
    
    return(
        <div>
            {/* <h1>{props.heading}-{text}</h1> */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} value={text} rows={8} id="mybox"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>

    )
}




