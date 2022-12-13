import React from 'react';
import classes from './MyLabelProductCard.module.css'

const MyLabelProductCard = ({product}) => {
    const saleLabelValue = 100 - ((product.sale_price * 100) / product.regular_price)
    return (
        <div className={classes.productCardSaleLabel}>
            - {Math.round(saleLabelValue)}%
        </div>
    );
};

export default MyLabelProductCard;