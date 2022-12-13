import React from 'react';
import classes from './QuantityButtonBlock.module.css'
import MyQuantity from "../../../UIUX/quantity/MyQuantity";
import MyBuyNow from "../../../UIUX/buttons/product_page/BuyNow/MyBuyNow";
import MyAddToCart from "../../../UIUX/NEW_UI/MyButtons/MyAddToCart/MyAddToCart";

const QuantityButtonBlock = ({product, countDecrease, countIncrease, counter, isExistsInCart}) => {
    return (
        <div className={classes.quantityButtonBlock}>
            <div className={classes.qntButtons}>
                <MyQuantity product={product} counter={counter} countDecrease={countDecrease} countIncrease={countIncrease} />
            </div>
            <div className={classes.cartButtons}>
                <MyAddToCart product={product} isCatalog={false} quantity={counter} isExistsInCart={isExistsInCart}/>
                <MyBuyNow>Купить в 1 клик</MyBuyNow>
            </div>
        </div>
    );
};

export default QuantityButtonBlock;