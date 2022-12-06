import React from 'react';
import classes from './MyGetOrder.module.css'

const MyGetOrder = ({children}) => {
    return (
        <button className={classes.getOrderButton}>
            {children}
        </button>
    );
};

export default MyGetOrder;