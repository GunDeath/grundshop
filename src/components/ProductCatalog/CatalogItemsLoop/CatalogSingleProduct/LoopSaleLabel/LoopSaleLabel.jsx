import React from 'react';
import classes from './LoopSaleLabel.module.css';

const LoopSaleLabel = ({sale_price, regular_price}) => {
    const saleLabelValue = 100 - ((sale_price * 100) / regular_price);
    return (
        <div className={classes.productCartSaleLabel}>
            - {Math.round(saleLabelValue)}%
        </div>
    );
};

export default LoopSaleLabel;