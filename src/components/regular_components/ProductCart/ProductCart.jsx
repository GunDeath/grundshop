import React from 'react';
import classes from './ProductCart.module.css'
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import CartItems from "./CartItems/CartItems";
import MyBreadCrumbs from "../../UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import MyEmptyComponent from "../../UIUX/NEW_UI/MyBlocks/MyEmptyComponent/MyEmptyComponent";

const ProductCart = () => {
    const {cart} = useTypedSelector(state => state)
    return (
        <div className={classes.cartContentMain}>
            <MyBreadCrumbs url='/cart' title='Корзина' />
            {
                cart.length !== 0
                    ? <CartItems/>
                    : <MyEmptyComponent pageTitle='Корзина пуста' />
            }
        </div>
    );
};

export default ProductCart;