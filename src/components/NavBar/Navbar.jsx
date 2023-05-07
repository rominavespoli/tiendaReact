
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useState, useEffect } from "react"
import { CartWidget} from "../CartWidget/CartWidget";
import { GrGamepad } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import products from "../../data/products.json";

export const NavBar = () => {
    const [itemsMenu, setItemsMenu] = useState([]);

    useEffect(() => {
		const productList = new Promise((resolve, reject) =>
			resolve(products)
		)
		productList.then(result => {
			const categories = result.map(item => item.category)
			const uniqueCategories = new Set(categories)
			setItemsMenu([...uniqueCategories].sort())
		})
	}, [])


    
    return(
       
                  <Navbar bg="secondary" variant="dark">
    
          
            
            <h1>Tienda de Juegos <GrGamepad/></h1>
            <Container>
            {/*
            <ul className="mainMenu">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul> 
           */}
      
		
            <nav className="navbar">

                
            
        
                <Link to="/">HOME</Link>
					{itemsMenu?.map(item => (
						<NavLink key={item} to={`/category/${item}`}>
							{item.toUpperCase()}
						</NavLink>
					))}
            </nav>
            </Container>
            <CartWidget contador={1} />
		</Navbar>

            
      
    )
}

