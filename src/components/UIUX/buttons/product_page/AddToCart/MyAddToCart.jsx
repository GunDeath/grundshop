import React from 'react';
import classes from './AddToCart.module.css'

const MyAddToCart = ({children}) => {
    return (
        <button className={classes.addToCartButton}>
            {children}
        </button>
    );
};

export default MyAddToCart;