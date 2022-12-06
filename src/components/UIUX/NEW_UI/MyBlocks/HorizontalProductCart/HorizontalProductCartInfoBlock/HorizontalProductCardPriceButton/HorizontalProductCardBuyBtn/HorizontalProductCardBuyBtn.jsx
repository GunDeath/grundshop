import React from 'react';
import classes from './HorizontalProductCardBuyBtn.module.css'
import MyAddToCart from "../../../../../../buttons/product_page/AddToCart/MyAddToCart";
import MyWishlist from "../../../../../MyActionButtons/MyWishlist/MyWishlist";
import MyCompare from "../../../../../MyActionButtons/MyCompare/MyCompare";

const HorizontalProductCardBuyBtn = ({product}) => {
    return (
        <div className={classes.horizontalProductCardBuyBtn}>
            <MyCompare product={product}/>
            <MyWishlist product={product}/>
            <MyAddToCart product={product} isCatalog={true}/>
        </div>
    );
};

export default HorizontalProductCardBuyBtn;