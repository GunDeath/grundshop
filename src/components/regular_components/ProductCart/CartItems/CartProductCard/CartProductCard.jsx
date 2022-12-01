import React from 'react';
import classes from './CartProductCard.module.css'
import Checkbox from "@mui/material/Checkbox";
import default_img from '../../../../../assets/img/default_img.png'
import QuantityButtonBlock from "../../../../ProductPage/ProductInfoBlock/QuantityButtonBlock/QuantityButtonBlock";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CartProductCard = ({product}) => {
    console.log(product)
    return (
        <div className={classes.productCard}>
            <div>
                <Checkbox {...label} />
            </div>
            <div className={classes.productImgBlock}>
                <img src={product.images[0].src || default_img} alt="" className={classes.img}/>
            </div>
            <div className={classes.productInfoBlock}>
                <div className={classes.productTitle}>
                    {product.name}
                </div>
                <div className={classes.skuText}>
                    Артикул: {product.sku}
                </div>
                <div className={classes.addingBtnBlock}>
                    <div className={classes.addingBtn}>В избранное</div>
                    <div className={classes.addingBtn}>Удалить</div>
                </div>
            </div>
            <div className={classes.productPriceBlock}>
                {product.price}
            </div>
        </div>
    );
};

export default CartProductCard;