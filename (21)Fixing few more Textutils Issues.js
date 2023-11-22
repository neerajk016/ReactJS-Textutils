





#index.html 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Textutils is a word counter character counting  utility which can be use to manipulate your text in the way yu want. you can remove extra spaces, copy the manipulated text as well as convert your text from upercas to lowercase and lowercase to upper case"/>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Textutils-Word Counter</title>
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












#app.js  

import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {






  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
}

 
  const[mode,setmode]=useState("light");




  const toggleMode = () => {
    if (mode === 'light') {
        setmode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success")
        document.title = "TextUtils - Dark Mode";
        setInterval(() => {
          document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1000);
        
    }
    else {
        setmode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success")
        document.title = "TextUtils - Light Mode";
        setInterval(() => {
          document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1000);
    }
  };

  
  


  return (
      
    
      
      <>
      <Router>
      <Navbar title="Textutils" about="About" mode={mode} togglemode={toggleMode} />

      <Alert alert={alert}/>

    
      
      <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter,character Counter,Remove extra Spaces" mode={mode}/>}/>


          <Route exact path="/about" element={<About mode={mode} />}/>
          
      </Routes>

      </Router> 
          
      
      
         
      </>
  );
};
export default App;














#navbar.js 

import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" to="/">Home</a> */}
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/about">{props.about}</a> */}
                        <Link className="nav-link" to="/about">{props.about}</Link>
                    </li>
                    
                    </ul>
                    {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'}mode</label>
                    </div>
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






































#alert.js 

import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  return (
      <div style={{height:'60px'}}>
          
      
       { props.alert &&
        <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.Type)}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
    
  )
}

export default Alert





#textform.js 

import React, { useState } from "react";

export default function Textform(props){
    const[text,setText]=useState('');


    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        // setText("new text")
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handledownClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        // setText("new text")
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
        
    }

    
    const handleonchange=(event)=>{
        console.log("on change");
        // console.log(event.target.value)
        setText(event.target.value)

    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");

        


        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleclear = () => {
        setText("")
        props.showAlert("Text Cleared!", "success");
    }


    
    
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            {/* <h1>{props.heading}-{text}</h1> */}
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} style={{background: props.mode==='dark'? '#13466e': 'white', color:props.mode=== 'dark'?'white': 'black'}} value={text} rows={8} id="mybox"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handledownClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclear}>Clear Text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Nothin to Preview"}</p>

        </div>
        
        
        </>
        

    )
}













#about.js 
import React  from 'react'

export default function About(props) {

  

  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}

  

 


  return (
    <div className='container' style={mystyle}>
      <h1 className='my-2' style={{color: props.mode === 'dark'?'white':'#042743',}}>About us</h1>
      <div className="accordion" id="accordionExample" >
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
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
          <strong>Free to use</strong>
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
          <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={mystyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

























#index.css 

.accordion-button::after {
    filter: invert(1);
}























