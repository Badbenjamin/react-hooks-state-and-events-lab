import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const inCart = isInCart ? "in-cart" : "";
  const actionForCart = isInCart ? "Remove from Cart" : "Add to Cart";
  const classForCart = isInCart ? "remove" : "add";

  function handleClick(){
    setIsInCart(!isInCart)
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={classForCart}>{actionForCart}</button>
    </li>
  );
}

export default Item;
