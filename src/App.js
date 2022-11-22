import React from "react";
import HomePage from "./components/regular_components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import Layout from "./router_layout/Layout";
import Catalog from "./components/catalog_of_products/Catalog";
import Delivery from "./components/regular_components/DeliveryPage/Delivery";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path='catalog' element={<Catalog/>} />
                <Route path='product/:id' element={<ProductPage/>} />
                <Route path='dostavka' element={<Delivery/>} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
