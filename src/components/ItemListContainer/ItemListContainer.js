import React from 'react'
import ItemList from '../itemComponent/itemList'
import './ItemListContainer.css'
import { Col } from 'react-bootstrap'

export const ItemListContainer = ({ greetings }) => {
    return (
        <Col className="mt-4" xs="10">
            <h2>¡Bienvenido, {greetings}!</h2>
            <h3 className="text-danger text-uppercase text-center">Visita nuestras cremas.</h3>
            <ItemList />
        </Col>
    )
}