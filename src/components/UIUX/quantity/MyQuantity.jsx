import React from 'react';
import classes from './MyQuantity.module.css'

const MyQuantity = ({quantity = 1}) => {
    return (
        <div className={classes.mainMyQuantityBlock}>
            <div className={`${classes.myQuantitySingleBlock}`}>-</div>
            <div className={`${classes.myQuantitySingleBlock}`}>{quantity}</div>
            <div className={`${classes.myQuantitySingleBlock}`}>+</div>
        </div>
    );
};

export default MyQuantity;