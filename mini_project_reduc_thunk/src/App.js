import React from "react";
import Navigation from './components/Navigation.jsx'
import ProductList from "./pages/ProductList.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import CartList from "./pages/CartList.jsx";
function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="product" element={<ProductList />}/>
          <Route path="cart" element={<CartList />}/>
        </Route>
      </Routes>
      {(location.pathname == '/product' || location.pathname == '/cart') ? <></> : <ProductList />}
    </div>
  );
}

export default App;
