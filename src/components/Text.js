import React, { useState } from "react";

export default function Text(props) {
  const HandleUpClick = () => {
    let newCount = count.toUpperCase();
    setCount(newCount);
    props.showAlert(" Converted to UpperCase ","success");
  };
  const HandleLowClick = () => {
    let newCount = count.toLowerCase();
    setCount(newCount);
    props.showAlert(" Converted to LowerCase ","success");
  };
  const HandleClearClick = () => {
    let newCount = "";
    setCount(newCount);
    props.showAlert(" Text cleared!!","success");
  };
  const HandleSpaceClick = () => {
    let newCount = count.split(/[ ]+/); 
    setCount(newCount.join(" "));
    props.showAlert(" Extra Space Removed!! ","success");
  };
  
  const handleOnchange = (event) => {
    setCount(event.target.value);
  };
  const [count, setCount] = useState("");

  return (
    <>
      <div className="container"style={{color:props.mode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={count}
            style={{backgroundColor:props.mode==='light'?'white':'#dee2e6'}}
            onChange={handleOnchange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disabled={count.length===0}className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}>
          UpperCase
        </button>
        <button disabled={count.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLowClick}>
          LowerCase
        </button>
        <button disabled={count.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick}>
          Clear
        </button>
        <button type="button" disabled={count.length===0}class="btn btn-primary" onClick={HandleSpaceClick}>
          Remove Extra Space
          </button>
        
      </div>
      <div className="container my-3"style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Your Text Summary:</h3>
        <p>
          {" "}
          {count.split(" ").filter((element)=>{return element.length!==0}).length } words and {count.length} characters are
          prsent in your text.
        </p>
        <p>{0.08 * (count.split(" ").length )} time you may take.</p>
        <h4>Preview:</h4>
        <p>{count.length>0?count:"Nothing to preview."}</p>
      </div>
    </>
  );
}
