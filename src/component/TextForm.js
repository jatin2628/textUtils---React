import React from "react";
import {useState} from 'react';




export default function TextForm(props){
    const [text,setText] = useState("");

    const handleUpClick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Convert to Uppercase','success')
    }

    const handleLoClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Convert to Lowercase','success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLoClear = () => {
        const newText = '';
        setText(newText);
        props.showAlert('clear textbox','success')
    }

    const copyClip = () => {
        const newtext = document.getElementById('myText');
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert('text has been copied','success')

    }

return (
    <>
    <div className="mb-3" style={{color : `${props.mode === 'dark' ? 'white':'black'}`}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}  style={{background : `${props.mode === 'dark' ? '#042743':'white'}`,color : `${props.mode === 'dark' ? 'white':'black'}`}} onChange={handleOnChange} id="myText" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClear}>Reset</button>
    <button className="btn btn-primary mx-1 my-1" onClick={copyClip}>Copy</button>
    <div className="container my-3" style={{color : `${props.mode === 'dark' ? 'white':'black'}`}}>
        <h1>Your text detail</h1>
        <h5>{text.split(" ").length} words {text.length} characters</h5>
        <h5>{0.008 * text.split(" ").length} minutes required to read</h5>
        <h1>Preview</h1>
        <p>{text.length>0?text:"enter text above to see preview.."}</p>
    </div>
    </>
)
}