import React from 'react';
import {Outlet, useParams} from 'react-router-dom';
import classes from './CatalogLayout.module.css'
import Footer from "../../components/main_components/footer/Footer";
import Header from "../../components/main_components/header/Header";
import CatalogAside from "../../components/CatalogAside/CatalogAside";
import PopularGoods from "../../components/regular_components/HomePage/popular_goods/PopularGoods";
import MyCatalogBanner from "../../components/UIUX/NEW_UI/MyBlocks/MyCatalogBanner/MyCatalogBanner";

const CatalogLayout = () => {
    const params = useParams()
    console.log(params.core)
    return (
        <div className={classes.catalogLayoutBlock}>
            <Header />
            <MyCatalogBanner />
            <div className={classes.contentAsideAndSection}>
                <div className={classes.contentWrapper}>
                    <CatalogAside isCatalog={true} />
                    <div className={classes.contentSection}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods />
            </div>
            <Footer />
        </div>
    );
};

export default CatalogLayout;