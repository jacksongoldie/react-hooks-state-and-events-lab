import React, { useState } from "react";

function Item({ name, category }) {

const [inCart, setCart] = useState(false);

function addToCart(){
  setCart(!inCart)
}

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
