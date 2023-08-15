"use client";
import { useState } from "react";

export default function Button() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        reset
      </button>
      <br />
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <span>{value} </span>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
