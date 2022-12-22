import React from "react";
import HomePage from "./components/regular_components/HomePage/HomePage";
import {Route, Routes, useParams} from "react-router-dom";
import Layout from "./router_layout/Layout/Layout";
import Delivery from "./components/regular_components/DeliveryPage/Delivery";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductLayout from "./router_layout/ProductLayout/ProductLayout";
import Error from "./components/regular_components/ErrorPage/Error";
import Test from "./components/Test/Test";
import {usePublishedCategories, usePublishedGoods} from './customHooks'
import CatalogLayout from "./router_layout/CatalogLayout/CatalogLayout";
import WishListLayout from "./router_layout/ActionsLayout/WishListlayout/WishListLayout";
import CartLayout from "./router_layout/ActionsLayout/CartLayout/CartLayout";
import CompareLayout from "./router_layout/ActionsLayout/CompareLayout/CompareLayout";
import OrderLayout from "./router_layout/OrderLayout/OrderLayout";

function App() {
    /*get products categories*/
    usePublishedCategories()
    usePublishedGoods()

    return (
        <div className="App">
            <Routes>
                <Route path='/' state={{rus: 'Главная'}} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='dostavka' element={<Delivery/>} breadcrumb='Доставка'/>
                    <Route path='wishlist' element={<WishListLayout/>}/>
                    <Route path='compare' element={<CompareLayout/>}/>
                    <Route path='order' element={<OrderLayout/>}/>
                    <Route path='cart' element={<CartLayout/>}/>
                </Route>
                <Route path='/catalog' element={<CatalogLayout/>}>
                    <Route index element={<ProductCatalog/>}/>
                    <Route path=':category_slug' element={<ProductCatalog/>}/>
                </Route>
                <Route path='/catalog/:category_slug/:slug' element={<ProductLayout/>}>
                    <Route index element={<ProductPage/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
                <Route path='/test' element={<Test/>}/>
            </Routes>
        </div>
    );
}

export default App;
