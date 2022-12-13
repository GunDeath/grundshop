import React from 'react';
import classes from './GridProductCardPrice.module.css'
import MyCardPrice from "../../../../../MyText/MyCardPrice/MyCardPrice";
import MyCardPriceSaleStyle from "../../../../../MyText/MyCardPriceSaleStyle/MyCardPriceSaleStyle";
import MyCardSalePrice from "../../../../../MyText/MyCardSalePrice/MyCardSalePrice";

const GridProductCardPrice = ({product}) => {
    return (
        <React.Fragment>
            {
                product.sale_price === ""
                    ?
                    <MyCardPrice price={product.price}/>
                    :
                    <div className={classes.productCartPriceBlock}>
                        <MyCardPriceSaleStyle price={product.price}/>
                        <MyCardSalePrice salePrice={product.sale_price} />
                    </div>
            }
        </React.Fragment>
    );
};

export default GridProductCardPrice;