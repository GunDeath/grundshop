import React from 'react';
import classes from "./Delivery.module.css";
import DeliveryTopPost from "./DeliveryTopPost/DeliveryTopPost";
import DeliveryMiddlePost from "./DeliveryMiddle/DeliveryMiddlePost";
import DeliveryBottom from "./DeliveryBottom/DeliveryBottom";
import PopularGoods from "../HomePage/popular_goods/PopularGoods";

const Delivery = () => {
    return (
        <div className={classes.main_container}>
            <DeliveryTopPost />
            <DeliveryMiddlePost />
            <DeliveryBottom/>
            <PopularGoods/>
        </div>
    );
};

export default Delivery;