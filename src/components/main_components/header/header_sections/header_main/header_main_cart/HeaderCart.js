import React from 'react';
import classes from './MeHeaderCart.module.css'
import cart_icon from '../../../../../../assets/icons/header_icons/top-header__cart-icon.svg'


const HeaderCart = () => {
    return (
        <div className={classes.main_header__product_cart}>
            <img src={cart_icon} alt="" className={classes.cart_icon}/>
            <div className={classes.main_header__cart_text}>
                <span className={classes.cart_span}>Корзина</span>
                <p className={classes.cart_count}>3 товара</p>
            </div>
        </div>
    );
};

export default HeaderCart;