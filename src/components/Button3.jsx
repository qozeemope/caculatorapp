import React from "react";

export default function Button3({ symbol, handleClick }) {
  return (
    <button className="last-end" onClick={() => handleClick(symbol)}>
      {symbol}
    </button>
  );
}
