import React from 'react';
import classes from './HorizontalProductCardTitleSku.module.css'
import MyCartProductTitle from "../../../../MyTitles/MyCartProductTitle/MyCartProductTitle";
import MyCardSkuText from "../../../../MyText/MyCardSkuText/MyCardSkuText";

const HorizontalProductCardTitleSku = ({product}) => {
    return (
        <div className={classes.productCartTitleSku}>
            <MyCartProductTitle product={product}/>
            <MyCardSkuText sku={product.sku}/>
        </div>
    );
};

export default HorizontalProductCardTitleSku;