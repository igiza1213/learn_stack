"use client";

import { useState } from "react";

export default function List() {
  let products = ["Tomatos", "Pasta", "Coconut"];
  const [quantity, setQuantity] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {products.map((product, index) => {
        return (
          <div key={index} className="food">
            <img src={`image/food${index}.png`} className="food-img" />
            <h4>{product} $40</h4>
            <span> {quantity[index]} </span>
            <button
              onClick={() => {
                setQuantity((prevQuantity) => {
                  const newQuantity = [...prevQuantity];
                  newQuantity[index] += 1;
                  return newQuantity;
                });
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
