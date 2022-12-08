import React, {useEffect, useState} from 'react';
import classes from './AddToCart.module.css'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const MyAddToCart = ({product, isCatalog = false, quantity = 1, isExistsInCart}) => {
    const {addItem} = useActions()
    const {cart} = useTypedSelector(state => state)

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return (
        <button
            className={
            isCatalog
                ? classes.addToCartButtonCatalog
                : classes.addToCartButtonPage
            }
            onClick={() => !isExistsInCart && addItem({...product, quantity: quantity})}
        >
            {isExistsInCart ? 'Добавлен' : 'В корзину'}
        </button>
    );
};

export default MyAddToCart;