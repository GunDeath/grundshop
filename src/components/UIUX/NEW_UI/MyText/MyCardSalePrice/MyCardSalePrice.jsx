import React from 'react';
import classes from './MyCardSalePrice.module.css'

const MyCardSalePrice = ({salePrice}) => {
    return (
        <div className={classes.productCartSalePrice}>
            <span>{Math.round(salePrice)}</span>
        </div>
    );
};

export default MyCardSalePrice;