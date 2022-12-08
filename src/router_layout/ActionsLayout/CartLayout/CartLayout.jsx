import React from 'react';
import classes from './CartLayout.module.css'
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import PopularGoods from "../../../components/regular_components/HomePage/popular_goods/PopularGoods";
import ProductCart from "../../../components/regular_components/ProductCart/ProductCart";

const CartLayout = () => {
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Корзина </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <CatalogAside/>
                    <div className={classes.contentSection}>
                        <ProductCart />
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CartLayout;