import React from 'react';
import classes from './OrderLayout.module.css'
import MyPageTitle from "../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import PopularGoods from "../../components/regular_components/PopularGoods/PopularGoods";
import OrderPage from "../../components/regular_components/OrderPage/OrderPage";

const OrderLayout = () => {
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Ваш заказ </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                        <OrderPage />
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default OrderLayout;