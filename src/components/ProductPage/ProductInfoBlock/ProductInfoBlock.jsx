import React from 'react';
import classes from "./ProductInfoBlock.module.css";
import ProductTitle from "./ProductTitle/ProductTitle";
import rating_icons from "../../../assets/icons/product-cart__rating.svg";
import CompareButtonsBlock from "./CompareButtonsBlock/CompareButtonsBlock";
import AttributeBlock from "./AttributeBlock/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import QuantityButtonBlock from "./QuantityButtonBlock/QuantityButtonBlock";

const ProductInfoBlock = ({singleProduct, quantity}) => {
    return (
        <div>
            <ProductTitle title={singleProduct.name}/>
            <div className={classes.ratingCompareBlock}>
                <div>
                    <img src={rating_icons} alt=""/>
                </div>
                <CompareButtonsBlock/>
            </div>
            <AttributeBlock singleProduct={singleProduct}/>
            <PriceBlock regularPrice={singleProduct.price}/>
            <QuantityButtonBlock quantity={quantity}/>
        </div>
    );
};

export default ProductInfoBlock;