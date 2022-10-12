import React from "react";
import Screen from "./Screen";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import * as math from "mathjs";
// import Textfit from "react-textfit";

function Calculator() {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

  const addToText = (val) => {
    setText((text) => [...text, val]);
  };

  const clearInput = () => {
    setText("");
    setResult("");
  };

  const calcResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const ac = () => {
    setText((text) => ["0"]);
    setResult("");
  };

  return (
    <div className="calculator">
      {/* input  screen */}
      <Screen text={text} result={result} />
      {/* butttons */}
      <div className="button-box">
        <div className="group group1">
          <Button1 symbol="AC" handleClick={ac} />
          {/* <Button1 symbol="DEG" /> */}
          <Button1 symbol="²" handleClick={addToText} />
          <Button1 symbol="%" handleClick={addToText} />
          <Button1 symbol="DEL" handleClick={clearInput} />
        </div>

        <div className="group group2">
          <Button2 symbol="√" handleClick={addToText} />
          <Button2 symbol="(" handleClick={addToText} />
          <Button2 symbol=")" handleClick={addToText} />
          <Button3 symbol="÷" handleClick={addToText} />
        </div>

        <div className="group group3">
          <Button2 symbol={7} handleClick={addToText} />
          <Button2 symbol={8} handleClick={addToText} />
          <Button2 symbol={9} handleClick={addToText} />
          <Button3 symbol={"*"} handleClick={addToText} />
        </div>

        <div className="group group4 ">
          <Button2 symbol={4} handleClick={addToText} />
          <Button2 symbol={5} handleClick={addToText} />
          <Button2 symbol={6} handleClick={addToText} />
          <Button3 symbol={"-"} handleClick={addToText} />
        </div>

        <div className="group group5">
          <Button2 symbol={1} handleClick={addToText} />
          <Button2 symbol={2} handleClick={addToText} />
          <Button2 symbol={3} handleClick={addToText} />
          <Button3 symbol={"/"} handleClick={addToText} />
        </div>

        <div className="group group6">
          <Button2 symbol={"."} handleClick={addToText} />
          <Button2 symbol={0} handleClick={addToText} />
          <Button2 symbol={"pi"} handleClick={addToText} />
          <Button3 symbol={"="} handleClick={calcResult} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
