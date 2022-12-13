import React from 'react';
import classes from './GridProductCardPriceAddCart.module.css'
import GridProductCardPrice from "./GridProductCardPrice/GridProductCardPrice";
import MyAddToCart from "../../../../MyButtons/MyAddToCart/MyAddToCart";

const GridProductCardPriceAddCart = ({product}) => {
    return (
        <div className={classes.gridProductCardPriceAddCart}>
            <GridProductCardPrice product={product} />
            <MyAddToCart isCatalog={true} product={product}/>
        </div>
    );
};

export default GridProductCardPriceAddCart;