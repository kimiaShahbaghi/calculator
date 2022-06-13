import React from "react";
import "./Button.scss";

function Button(props) {
  const classPicker = (value) => {
    switch (value) {
      case "(":
      case ")":
      case "%":
      case "AC":
      case "/":
      case "*":
      case "-":
      case "+":
        return "operator";

      case "=":
        return "equal";

      default:
        return "number";
    }
  };
  return (
    <button
      className={`${classPicker(props.buttonValue)}`}
      onClick={() => {
        console.log(props.buttonValue);
      }}
    >
      {props.buttonValue}
    </button>
  );
}

export default Button;
