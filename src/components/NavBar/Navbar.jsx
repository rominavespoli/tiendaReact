import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { GrGamepad } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import products from "../../data/products.json";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

export const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => resolve(products));
    productList.then((result) => {
      const categories = result.map((item) => item.category);
      const uniqueCategories = new Set(categories);
      setItemsMenu([...uniqueCategories].sort());
    });
  }, []);

  return (
    <section>
    <Navbar bg="primary" variant="light">
        <NavbarBrand className="brand"> Tienda de Juegos <GrGamepad /></NavbarBrand>

        <Nav className="navbar">
        <NavLink className="link" to="/">Inicio</NavLink>
        <NavLink className="link" to="/Nosotros">Nosotros</NavLink>
        <NavLink className="link" to="/Contacto">Contacto</NavLink>
        </Nav>
        <CartWidget contador={1} />
    </Navbar>
    <div className="linkCategory">
        <ul>
            <li>
            {itemsMenu?.map((item) => (
              <NavLink className="link" key={item} to={`/category/${item}`}>
                {item.toUpperCase()}
              </NavLink>
            ))}
            </li>
        </ul>
    </div>
    </section>
);
};
