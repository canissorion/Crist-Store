import React from 'react'
import ItemList from '../itemComponent/itemList'
import './ItemListContainer.css'
import { Row, Col } from 'react-bootstrap'

export const ItemListContainer = ({ greetings }) => {
    return (

        <Row >
            <Col xs={2} >
                <div className="full-container">
                    <div className="container-fluid sideBarFull">
                        <div className="row h-100">
                            <nav className="col bg-light sidebar ">
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column sideBarLinks">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/home">
                                                <span data-feather="home"></span>
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/cremas">
                                                <span data-feather="home"></span>
                                                Cremas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/perfumes">
                                                <span data-feather="home"></span>
                                                Perfumes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>

                    </div>

                </div>
            </Col>
            <Col xs={10} className="mt-2 mb-2">
                <h2>¡Bienvenido, {greetings}!</h2>
                <ItemList />
            </Col>
        </Row>
    )
}