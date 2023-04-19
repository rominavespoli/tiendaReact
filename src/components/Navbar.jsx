
import { CartWidget} from "./CartWidget";
import { GrGamepad } from "react-icons/gr";


export const NavBar = () => {
    return(
        <header>
            <CartWidget contador={1} />
            <img src=""alt=""/>
            
            <h1>Tienda de Juegos <GrGamepad/></h1>
           
            <nav className="navbar">
                <h2>Categorias</h2>
              
                <ul>
                    <li>Juegos de ingenio </li>
                    <li>Juegos de roles</li>
                    <li>Juegos Cooperativos</li>
                    <li>Juegos de estrategia </li>
                </ul>
            </nav>
            
        </header>
    )
}

