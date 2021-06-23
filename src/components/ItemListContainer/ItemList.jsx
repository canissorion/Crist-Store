import React from "react";

import Item from "./Item";
import productList from "../fakeData/productos.js";

import "./ItemList.css";

const ItemList = () => {
  const products = productList;
  return (
    <div className="product-list-container">
      {
        <>
          {products.map((product) => {
            return (
              <div key={product.itemID}>
                <Item
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            );
          })}
        </>
      }
    </div>
  );
};

export default ItemList;