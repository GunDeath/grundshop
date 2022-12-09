import React from 'react';
import classes from './ProductCart.module.css'
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartItems from "./CartItems/CartItems";
import MyBreadCrumbs from "../../UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";

const ProductCart = () => {
    const {cart} = useTypedSelector(state => state)
    return (
        <div className={classes.cartContentMain}>
            <MyBreadCrumbs url='/cart' title='Корзина' />
            {
                cart.length !== 0
                    ? <CartItems cart={cart}/>
                    : <EmptyCart/>
            }
        </div>
    );
};

export default ProductCart;