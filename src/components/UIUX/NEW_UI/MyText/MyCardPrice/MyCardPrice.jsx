import React from 'react';
import classes from './MyCardPrice.module.css'

const MyCardPrice = ({price}) => {
    return (
        <span className={classes.myCardPrice}>
            {Math.round(price)} руб.
        </span>
    );
};

export default MyCardPrice;