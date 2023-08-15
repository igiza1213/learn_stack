"use client";

import { useState } from "react";

export default function Button() {
  const titles = ["first", "second", "third"];
  const [quantity, setQuantity] = useState([0, 0, 0]);

  return (
    <div className="list-bg">
      {titles.map((title, i) => (
        <div className="list-item" key={i}>
          <h4>{title}</h4>
          <p>{quantity[i]}</p>
          <button
            onClick={() => {
              setQuantity((prevQuantity) => {
                const newQuantity = [...prevQuantity];
                newQuantity[i] += 1;
                return newQuantity;
              });
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
