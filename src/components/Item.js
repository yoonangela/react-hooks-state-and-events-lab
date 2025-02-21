import {React,useState} from "react";

function Item({ name, category }) {

  const [cart, setCart]=useState(false)

  function addInCart(){
    return setCart(!cart)
  }
  return (
    <li className={cart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addInCart} className="add">
        {cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
