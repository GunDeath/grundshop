import React from 'react';
import classes from './GridProductCard.module.css'
import GridProductCardImgBlock from "./GridProductCartImgBlock/GridProductCardImgBlock";
import GridProductCardInfoBlock from "./GridProductCardInfoBlock/GridProductCardInfoBlock";

const GridProductCard = ({product}) => {
    return (
        <div className={classes.gridProductCart}>
            <GridProductCardImgBlock product={product} />
            <GridProductCardInfoBlock product={product} />
        </div>
    );
};

export default GridProductCard;