import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to UpperCase!", "success");
    toast.success("Converted to UpperCase!", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to LowerCase!", "success");
    toast.success("Converted to LowerCase!", "success");
  };

  const handleCapClick = () => {
    const arr = text.split(" ");

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    let newText = arr.join(" ");
    setText(newText);
    // props.showAlert("Text Capitalized!", "success");
    toast.success("Text Capitalized!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    // props.showAlert("Text Cleared!", "danger");
    toast.warn("Text Cleared!", "danger")
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h5>{props.heading}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(88,88,88)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mr-2" onClick={handleUpperClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleCapClick}>
          Capitalize Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h5>Summary: </h5>
        <p>
          Your text contains {text.split(" ").length - 1} words and{" "}
          {text.length} characters.
        </p>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h5>Preview: </h5>
        <p className="border border-success border-2 rounded px-1">
          {text.length > 0 ? text : "Write something above to preview it here."}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
