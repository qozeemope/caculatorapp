import React from "react";

function Screen({ text, result }) {
  return (
    <div className="screen" max={8}>
      <div className="previous-operand">{result}</div>
      <div className="current-operand">{text}</div>
    </div>
  );
}

export default Screen;
