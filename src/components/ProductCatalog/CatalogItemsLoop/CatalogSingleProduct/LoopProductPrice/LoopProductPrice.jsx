import React from 'react';
import classes from "./LoopProductPrice.module.css";

const LoopProductPrice = ({sale_price, price, regular_price}) => {
    return (
        <>
            {sale_price === ""
                ?
                <div className={classes.productCartPriceBlock}>
                    <div className={classes.productCartRegularPrice}>
                        {Math.round(price)} руб.
                    </div>
                </div>
                :
                <div className={classes.productCartPriceBlock}>
                    <div className={
                        `${classes.productCartRegularPrice} ${classes.saleStyles}`
                    }>
                        {Math.round(regular_price)} руб.
                    </div>
                    <div className={classes.productCartSalePrice}>
                        {Math.round(sale_price)}
                    </div>
                </div>
            }
        </>
    );
};

export default LoopProductPrice;