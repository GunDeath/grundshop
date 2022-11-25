import React from 'react';
import classes from "./ProductInfoBlock.module.css";
import ProductTitle from "./ProductTitle/ProductTitle";
import rating_icons from "../../../assets/icons/product-cart__rating.svg";
import CompareButtonsBlock from "./CompareButtonsBlock/CompareButtonsBlock";
import AttributeBlock from "./AttributeBlock/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import QuantityButtonBlock from "./QuantityButtonBlock/QuantityButtonBlock";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const ProductInfoBlock = ({singleProduct, quantity, price, getQuantity}) => {
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
            <PriceBlock regularPrice={price}/>
            <QuantityButtonBlock quantity={quantity} getQuantity={getQuantity}/>
            <RelatedProducts product={singleProduct} />
        </div>
    );
};

export default ProductInfoBlock;