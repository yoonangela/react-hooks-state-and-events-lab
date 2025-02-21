import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterlist, setFilter]=useState("All")
  
  function filterChange(event){
    return setFilter(event.target.value)
  }
  const filtereditems= filterlist === "All" ? items : items.filter((item) => item.category === filterlist)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">   
          {filtereditems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />))}   
      </ul>
    </div>
  );
}

export default ShoppingList;
