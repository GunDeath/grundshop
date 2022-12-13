import React from 'react';
import classes from './ProductLayout.module.css'
import Header from "../../components/main_components/header/Header";
import Footer from "../../components/main_components/footer/Footer";
import CatalogAside from "../../components/CatalogAside/CatalogAside";
import {Outlet} from 'react-router-dom';
import PopularGoods from "../../components/regular_components/PopularGoods/PopularGoods";

const ProductLayout = () => {
    return (
        <div className={classes.mainBlockLayout}>
            <Header />
            <div className={classes.twoColumnLayout}>
                <CatalogAside />
                <div className={classes.mainContent}>
                    <Outlet />
                </div>
            </div>
            <div className={classes.container}>
                <PopularGoods/>
            </div>
            <Footer />
        </div>
    );
};

export default ProductLayout;