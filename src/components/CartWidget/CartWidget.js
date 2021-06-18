import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import  "./CartWidget.css";

export const CartWidget = () => {
    return (
        <div>
            <Icon.Cart4 className="carrito" color="#33cc33" size={30} />
        </div>
    )
}

export default CartWidget;
