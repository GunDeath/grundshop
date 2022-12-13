import React from 'react';
import classes from './HorizontalProductCard.module.css'
import HorizontalProductCardInfoBlock from "./HorizontalProductCartInfoBlock/HorizontalProductCardInfoBlock";
import HorizontalProductCardImgBlock from "./HorizontalProductCardImgBlock/HorizontalProductCardImgBlock";
import HorizontalProductCardCloseBlock from "./HorizontalProductCardCloseBlock/HorizontalProductCardCloseBlock";

const HorizontalProductCard = ({product}) => {
    return (
        <div className={classes.horizontalProductCartWrapper}>
            <HorizontalProductCardImgBlock product={product}/>
            <HorizontalProductCardInfoBlock product={product}/>
            <HorizontalProductCardCloseBlock product={product}/>
        </div>
    );
};

export default HorizontalProductCard;