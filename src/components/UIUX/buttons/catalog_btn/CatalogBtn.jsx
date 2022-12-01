import React, {useState} from 'react';
import classes from './CatalogBtn.module.css'
import {useActions} from "../../../../store/hooks/useActions";

const CatalogBtn = ({product, quantity}) => {
    const {addItem} = useActions()

    return (
        <div onClick={()=> addItem(product)} className={classes.product_cart__button}>
            В корзину
        </div>
    );
};

export default CatalogBtn;