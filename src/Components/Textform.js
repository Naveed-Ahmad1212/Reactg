import React, {useState} from 'react'

export default function Textform(props) {
const handleUpClick=() =>
{
    let texts= text.toUpperCase();
    setText(texts);
    setTimeout((props.showAlert(": Converted to UpperCase", "Success"), 1500));
}

const handleLowClick=() =>
{
    let texts= text.toLowerCase();
    setText(texts);
    props.showAlert(": Converted to LowerCase", "Success");
}

const handleClear=() =>
{
    setText("");
    props.showAlert(": Text is Cleared", "Success");
}

const handleCopy=() =>
{
    navigator.clipboard.writeText(text);
    props.showAlert(": Text is Copied", "Success");
}


const handleOnChange=(event) =>
{
    console.log("Change was done");
    setText(event.target.value);
}

    const [text, setText] = useState("Enter Text here")
  return (
    <>
    <div className="container" >
        <h1> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'dark': 'light', color: props.mode==='light'? 'dark': 'light'}} id="myBox" rows="8"> </textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-warning" onClick={handleCopy}>Copy Text </button>
        

    </div>
    <div className="container">
        <h2> Your Text Summary here</h2>
        <p> Nmber of Words {text.split(" ").length-1} and number of Characters {text.length} and time to read is {0.008*(text.length)} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter Something to Preview"}</p>
        </div>
        </>
  )
}