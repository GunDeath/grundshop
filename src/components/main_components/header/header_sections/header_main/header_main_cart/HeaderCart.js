import React from 'react';
import classes from './MeHeaderCart.module.css'
import cart_icon from '../../../../../../assets/icons/header_icons/top-header__cart-icon.svg'
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {Link} from "react-router-dom";

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

const HeaderCart = () => {
    const {cart} = useTypedSelector(state => state)
    return (
        <Link to='cart' className={classes.main_header__product_cart}>
            <img src={cart_icon} alt="" className={classes.cart_icon}/>
            <div className={classes.main_header__cart_text}>
                <span className={classes.cart_span}>Корзина</span>
                <p className={classes.cart_count}>{cart.length} {getNoun(cart.length, 'товар', 'товара', 'товаров')}</p>
            </div>
        </Link>
    );
};

export default HeaderCart;