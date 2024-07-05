import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Upper case is activated");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lower case is activate");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Clear text is activate");
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace=() => {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const handleCopy=() =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:
          props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Handle Extra Space</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p><b>{text.split(" ").length} words</b> and <b>{text.length} characters</b></p>
      <h3>Preview</h3>
      <h4>{text.length>0?text:"Enter text to get the preview of it"}</h4>
    </div>
    </>
  );
}
