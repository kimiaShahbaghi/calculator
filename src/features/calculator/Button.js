import React from "react";
import { useDispatch } from "react-redux";
import { addInput, calc, singleOperator, acDelete } from "./calculatorSlice";
import "./Button.scss";

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

function Button(props) {
  const dispatch = useDispatch();

  const clickHandler = (input) => {
    switch (input) {
      case "=":
        console.log("equal");
        dispatch(calc());
        break;

      case "*":
      case "/":
      case "+":
      case "-":
      case ".":
        dispatch(singleOperator(input));
        break;

      case "AC":
        dispatch(acDelete());
        break;

      default:
        console.log("default");
        dispatch(addInput(input));
    }
  };

  return (
    <button
      className={`${classPicker(props.buttonValue)}`}
      onClick={() => clickHandler(props.buttonValue)}
    >
      {props.buttonValue}
    </button>
  );
}

export default Button;
