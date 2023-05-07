import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from "./components/NavBar/Navbar";

import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";



function App() {
  const onAdd = stock => console.log("Stock actual:  " + stock)
  return (
    <div className="container">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" 
          element= {<ItemListContainer />}
          />
          
          <Route path="/category/:id" 
          element= {<ItemListContainer />}
          />
           <Route path="/item/:id" 
          element= {<ItemDetailContainer onAdd={onAdd} />} 
          />
           <Route path="/cart" 
          element= {<Cart />}
          />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
