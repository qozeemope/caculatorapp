import React from "react";

export default function Button1({ symbol, handleClick }) {
  return (
    <button className="first-row" onClick={() => handleClick(symbol)}>
      {symbol}
    </button>
  );
}
