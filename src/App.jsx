
import './App.css';

import { NavBar } from "./components/Navbar";
import { ItemListContainer} from "./container/itemListContainer"



function App() {
  return (
    <div className='container'>
      
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos"} />
    </div>
  );
}

export default App;
