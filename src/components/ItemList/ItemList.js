import React from 'react'
import './ItemList.css'

export const ItemList = ({ Name,LastName }) => {
  Name= 'Invitado';
  return (
    <div className="welcome"> Bienvenido a Crist Store!, {Name}</div>
    )
}
export default ItemList;
