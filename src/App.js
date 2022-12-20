import React, {useEffect} from "react";
import HomePage from "./components/regular_components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import Layout from "./router_layout/Layout/Layout";
import Delivery from "./components/regular_components/DeliveryPage/Delivery";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductLayout from "./router_layout/ProductLayout/ProductLayout";
import Error from "./components/regular_components/ErrorPage/Error";
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import {useActions} from "./store/hooks/useActions";
import Test from "./components/Test/Test";
import {usePublishedCategories, usePublishedGoods} from './customHooks'
import CatalogLayout from "./router_layout/CatalogLayout/CatalogLayout";
import WishListLayout from "./router_layout/ActionsLayout/WishListlayout/WishListLayout";
import CartLayout from "./router_layout/ActionsLayout/CartLayout/CartLayout";
import CompareLayout from "./router_layout/ActionsLayout/CompareLayout/CompareLayout";
import OrderLayout from "./router_layout/OrderLayout/OrderLayout";

function App() {
    /*get products categories*/
    const {categories, goodsList} = useTypedSelector(state => state)
    const {categoryAddItem, addProducts} = useActions()
    const categoriesList = usePublishedCategories()
    const goodsListArray = usePublishedGoods()

    useEffect(() => {
        if (categoriesList.length !== 0) {
            if (localStorage.getItem("categories") !== null) {
                if (localStorage.getItem('categories').length > 2 || typeof (localStorage.getItem('categories')) !== 'undefined') {
                    localStorage.getItem('categories').length > 2 ? console.log('categories') : categoryAddItem(categoriesList)
                }
            } else {
                categoryAddItem(categoriesList)
            }
        }
    }, [categoriesList])

    useEffect(() => {
        localStorage.setItem('singleCategory', JSON.stringify(categories.filter(cat => cat.acf.default_catalog_category === true)))
        localStorage.setItem('categories', JSON.stringify(categories))
    }, [categories])


    useEffect(() => {
        if (goodsListArray.length !== 0) {
            if (localStorage.getItem('goods') !== null) {
                if (localStorage.getItem('goods').length > 2 || typeof (localStorage.getItem('goods')) !== 'undefined') {
                    localStorage.getItem('goods').length > 2 ? console.log('goods') : addProducts(goodsListArray)
                }
            } else {
                console.log('empty')
                addProducts(goodsListArray)
            }
        }
    }, [goodsListArray])

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goodsList))
    }, [goodsList])

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
