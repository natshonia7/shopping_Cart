import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Shop from './Pages/shop/Shop'
import Cart from './Pages/cart/Cart'
import { ShopContextProvider } from "./context/Shop-Context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
