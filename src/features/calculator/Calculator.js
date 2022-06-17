import React from "react";
import "./Calculator.scss";
import Button from "./Button";
import { useSelector } from "react-redux";
import { selectInput, selectAnswer } from "./calculatorSlice";

const buttons = [
  "(",
  ")",
  "%",
  "AC",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "-",
  0,
  ".",
  "=",
  "+",
];

function Calculator() {
  const input = useSelector(selectInput);
  const answer = useSelector(selectAnswer);

  return (
    <div className="calculator">
      <div className="calculator__screen">
        <p className="calculator__screen__answer"> Ans = {answer} </p>
        <p className="calculator__screen__input">{input}</p>
      </div>
      <div className="calculator__buttons">
        {buttons.map((button, index) => {
          return <Button buttonValue={button} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Calculator;
