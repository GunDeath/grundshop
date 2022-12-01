import React from 'react';
import classes from './QuantityButtonBlock.module.css'
import MyQuantity from "../../../UIUX/quantity/MyQuantity";
import MyAddToCart from "../../../UIUX/buttons/product_page/AddToCart/MyAddToCart";
import MyBuyNow from "../../../UIUX/buttons/product_page/BuyNow/MyBuyNow";

const QuantityButtonBlock = ({getQuantity, product}) => {
    return (
        <div className={classes.quantityButtonBlock}>
            <div className={classes.qntButtons}>
                <MyQuantity getQuantity={getQuantity}/>
            </div>
            <div className={classes.cartButtons}>
                <MyAddToCart product={product} isCatalog={false}/>
                <MyBuyNow>Купить в 1 клик</MyBuyNow>
            </div>
        </div>
    );
};

export default QuantityButtonBlock;