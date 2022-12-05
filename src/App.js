import React, {useEffect} from "react";
import HomePage from "./components/regular_components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import Layout from "./router_layout/Layout";
import Delivery from "./components/regular_components/DeliveryPage/Delivery";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductCart from "./components/regular_components/ProductCart/ProductCart";
import ProductLayout from "./router_layout/ProductLayout/ProductLayout";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path='dostavka' element={<Delivery/>} />
                <Route path='/cart' element={<ProductCart />}/>
            </Route>
            <Route path='/catalog' element={<ProductLayout />}>
                <Route index element={<ProductCatalog />} />
                <Route exact path=':id' element={<ProductCatalog />} />
                <Route path='product/:slug' element={<ProductPage/>} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
