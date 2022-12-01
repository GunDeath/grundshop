import React from 'react';
import classes from './ProductCart.module.css'
import CatalogAside from "../../CatalogAside/CatalogAside";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartItems from "./CartItems/CartItems";

const ProductCart = () => {
    const {cart} = useTypedSelector(state => state)
    return (
        <div className={classes.mainContainer}>
            <div className={classes.cartWrapper}>
                <CatalogAside isCatalog={false}/>
                <div className={classes.cartContentMain}>
                    <div className={classes.breadCrumbs}>Главная > Корзина</div>
                    {
                        cart.length !== 0
                            ? <CartItems cart={cart}/>
                            : <EmptyCart />
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCart;