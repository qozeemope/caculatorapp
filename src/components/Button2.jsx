import React from "react";

export default function Button2({ symbol, handleClick }) {
  return (
    <button className="second-row" onClick={() => handleClick(symbol)}>
      {symbol}
    </button>
  );
}
