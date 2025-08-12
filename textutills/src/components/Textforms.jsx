import React, { useState } from "react";

export const Textforms = (props) => {
  // Upper case
  const handleUpClick = () => {
    // console.log("uppercase was Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };

  //copy text
  const handleCopy= () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied","secondary")
  };

  // handle extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space has been removed","success")
  }

  const [text, setText] = useState("");
  

  //ek event handler hai jo tab trigger hota hai jab aap input box (ya textarea) me koi bhi text type karte hain ya uska content change hota hai.
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
    localStorage.setItem("user", event.target.value);
  };

  // Lower case
  const handleLoClick = () => {
    // console.log("uppercase was Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };

  // Default text
  const handledefault = () => {
    let store = localStorage.getItem("user");
    setText(store);
    props.showAlert("This is your default text which you enter very first ","info")
  };

  //clear text
  const handleClearClick = () => {
    localStorage.clear();
    let newText = "";
    setText(newText);
    props.showAlert("All text has been removed","danger")
  };



  return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledefault}>Default Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
