import React from 'react';
import classes from './PriceBlock.module.css'

const PriceBlock = ({regularPrice, salePrice}) => {
    return (
        <div className={classes.priceBlock}>
            <div className={classes.regularPrice}>{Math.round(regularPrice)} руб.</div>
            {
                salePrice
                    ? <div className={classes.salePrice}>{salePrice}</div>
                    : <></>
            }

        </div>
    );
};

export default PriceBlock;