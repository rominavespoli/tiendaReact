import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from "./components/NavBar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {Nosotros} from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/Contacto/Contacto";




function App() {
  const onAdd = stock => console.log("Stock:  " + stock)
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer />}
          />
          <Route path="/category/:id" element= {<ItemListContainer />}
          />
          <Route path="/item/:id" element= {<ItemDetailContainer onAdd={onAdd} />} 
          />
          <Route path="/Nosotros" element= {<Nosotros />}
          />
          <Route path="/Contacto" element= {<Contacto />}
          />
        </Routes>
      </BrowserRouter>   
  );
}

export default App;
