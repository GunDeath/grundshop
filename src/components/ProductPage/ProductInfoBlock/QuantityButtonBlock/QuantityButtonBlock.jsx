import React from 'react';
import classes from './QuantityButtonBlock.module.css'
import MyQuantity from "../../../UIUX/quantity/MyQuantity";
import MyAddToCart from "../../../UIUX/buttons/product_page/AddToCart/MyAddToCart";
import MyBuyNow from "../../../UIUX/buttons/product_page/BuyNow/MyBuyNow";

const QuantityButtonBlock = ({quantity, getQuantity}) => {
    return (
        <div className={classes.quantityButtonBlock}>
            <div className={classes.qntButtons}>
                <MyQuantity quantity={quantity} getQuantity={getQuantity}/>
            </div>
            <div className={classes.cartButtons}>
                <MyAddToCart>В корзину</MyAddToCart>
                <MyBuyNow>Купить в 1 клик</MyBuyNow>
            </div>
        </div>
    );
};

export default QuantityButtonBlock;