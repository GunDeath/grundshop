import React from 'react';
import classes from './MyBuyNow.module.css'

const MyBuyNow = ({children}) => {
    return (
        <button className={classes.muBuyNowButton}>
            {children}
        </button>
    );
};

export default MyBuyNow;