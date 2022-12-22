import React from 'react';
import classes from './MyPriceFilterSpan.module.css'

const MyPriceFilterSpan = ({children}) => {
    return (
        <span className={classes.MyPriceFilterSpan}>
            {children}
        </span>
    );
};

export default MyPriceFilterSpan;