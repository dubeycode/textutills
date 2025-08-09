import React,{useState} from 'react'
 

export const Textforms = (props) => {
    const handleupClick=()=>{
        // console.log("uppercase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleLowerClick=()=>{
        // console.log("uppercase was Clicked" +text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChangeLower=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    const [text,setText]=useState('')
    
    return (
       <>
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnChange} onChang={handleOnChangeLower}  id="mybox" rows="8" placeholder='Enter text here press button and see the magic'></textarea>
            </div>
            
            <button className="btn btn-primary"  onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

       </>

    )
}
