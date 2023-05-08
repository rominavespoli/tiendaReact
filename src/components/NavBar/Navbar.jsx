import Container from "react-bootstrap/Container";
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
    <Navbar bg="primary" variant="light">
      <Container>
        <NavbarBrand>
          Tienda de Juegos <GrGamepad />
        </NavbarBrand>

        <Nav>
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          {itemsMenu?.map((item) => (
            <NavLink className="link" key={item} to={`/category/${item}`}>
              {item.toUpperCase()}
            </NavLink>
          ))}
        </Nav>
        <CartWidget contador={1} />
      </Container>
    </Navbar>
  );
};
