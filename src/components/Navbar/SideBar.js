import React, { PureComponent } from 'react'
import { Col } from 'react-bootstrap'
import './Navbar.css'

export default class SideBar extends PureComponent {
    render() {
        return (
            <Col xs="2" className="bg-light pl-4 pt-5">
                <div className="full-container ">
                    <div className="container-fluid sideBarFull">
                        <div className="row h-100">
                            <nav className="col sidebar">
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column sideBarLinks">
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="/home">
                                                <span data-feather="home"></span>
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/category/cremas">
                                                <span data-feather="home"></span>
                                                Cremas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="/perfumes">
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

        )
    }
}