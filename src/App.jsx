import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import  ItemDetailContainer  from "./components/ItemDetailContainer";
import Item from "./components/Item";






function App() {
  
return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      
      <Route exact path = "/" element= {<Welcome />} />
      <Route exact path = "/category" element= {<Item/>} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      
      <Route exact path = "/Cart" element= {<Cart/>} />

      
      
      

    </Routes>

  
  
  </BrowserRouter>

);
  
}

export default App;
