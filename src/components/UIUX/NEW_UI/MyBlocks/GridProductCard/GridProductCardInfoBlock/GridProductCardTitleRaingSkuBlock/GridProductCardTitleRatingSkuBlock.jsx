import React from 'react';
import classes from './GridProductCardTitleRatingSkuBlock.module.css'
import MyCartProductTitle from "../../../../MyTitles/MyCartProductTitle/MyCartProductTitle";
import MaterialUiRating from "../../../../MaterialUIRating/MaterialUIRating";
import MyCardSkuText from "../../../../MyText/MyCardSkuText/MyCardSkuText";

const GridProductCardTitleRatingSkuBlock = ({product}) => {
    return (
        <div className={classes.gridProductCardTitleRatingSkuBlock}>
            <MyCartProductTitle product={product} />
            <MaterialUiRating product={product}/>
            <MyCardSkuText sku={product.sku}/>
        </div>
    );
};

export default GridProductCardTitleRatingSkuBlock;