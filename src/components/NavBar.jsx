import React from "react";
import "./Navbar.css";
import CartWidget from '../components/CartWidget/CartWidget.js';

export default function Navbar() {
  return (
    <div className="full-container">
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap px-3 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">
          Crist Store
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/s">
            <CartWidget/>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/s">
              item
            </a>
          </li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/s">
              item
            </a>
          </li>
        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
                Aqui va el carrito
            </a>
          </li>
        </ul>
      </nav>
      </div>
  );
}