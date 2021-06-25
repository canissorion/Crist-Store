import React, { useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Item from "./Item";
import productList from "../fakeData/productos.js";

import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const myAlert = (message) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Atención</p>,
      footer: "{ window.brandName }",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>{message}</p>);
    });
  };

  const loadProducts = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      myAlert(
        "Atención, no se pudo obtener la lista de productos. Por favor reintente en unos instantes."
      );
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="product-list-container">
      {products.length ? (
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
      ) : (
        <p>Cargando...{<CircularProgress />}</p>
      )}
    </div>
  );
};

export default ItemList;