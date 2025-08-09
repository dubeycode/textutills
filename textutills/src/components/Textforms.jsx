import React, { useState } from "react";

export const Textforms = (props) => {
  // Upper case 
  const handleupClick = () => {
    // console.log("uppercase was Clicked" +text);

    let newText = text.toUpperCase();
    setText(newText);
  };

    //ek event handler hai jo tab trigger hota hai jab aap input box (ya textarea) me koi bhi text type karte hain ya uska content change hota hai.
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  // Lower case
  const handleLowerClick = () => {
    // console.log("uppercase was Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
  };


  

  const [text, setText] = useState("");

  
  return (
    <>
      <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            // handeldefault={handeldefault}
            id="mybox"
            rows="8"
            placeholder="Enter text here press button and see the magic"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleupClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={handledefault}>
          Convert to Default
        </button> */}
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
