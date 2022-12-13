import React from 'react';
import classes from './MyCardPriceSaleStyle.module.css'

const MyCardPriceSaleStyle = ({price}) => {
    return (
        <div className={classes.saleStyles}>
            <span className={classes.priceSaleStyling}>
                {Math.round(price)} руб.
            </span>
        </div>
    );
};

export default MyCardPriceSaleStyle;