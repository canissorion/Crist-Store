import React from 'react'
import './ItemList.css'
import ItemListProductos from "./ItemList";

export const ItemList = ({ Name,LastName }) => {
  Name= 'Invitado';
  return (
    <>
      <div className="welcome"> Bienvenido a Crist Store!, {Name}</div>
      <main>
        <ItemListProductos />
      </main>
      <br/>
    </>
    )
}
export default ItemList;
