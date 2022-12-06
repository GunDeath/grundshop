import React from 'react';
import classes from './HorizontalProductCardPriceRating.module.css'
import MyCardPrice from "../../../../../MyText/MyCardPrice/MyCardPrice";
import MaterialUiRating from "../../../../../MaterialUIRating/MaterialUIRating";

const HorizontalProductCardPriceRating = ({product}) => {
    return (
        <div className={classes.priceRatingBlock}>
            <MyCardPrice price={product.price}/>
            <MaterialUiRating product={product}/>
        </div>
    );
};

export default HorizontalProductCardPriceRating;