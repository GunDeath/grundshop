import React from 'react';
import classes from './RelatedSmallBlock.module.css';

const RelatedSmallBlock = ({product}) => {
    return (
        <div className={classes.mainRelatedSmallBlock}>
            <div className={classes.relatedProductImg}>
                <img src={product.images[0].src} alt="" className={classes.singleRelatedImg}/>
            </div>
            <div className={classes.relatedProductInfo}>
                <div className={classes.relatedProductTitle}>{product.name}</div>
                <div className={classes.relatedProductPriceCart}>
                    <div className={classes.relatedProductPrice}>
                        {Math.round(product.price)} руб.
                    </div>
                    <div>
                        <button className={classes.relatedProductButton}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedSmallBlock;