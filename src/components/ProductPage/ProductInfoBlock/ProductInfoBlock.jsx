import React from 'react';
import classes from "./ProductInfoBlock.module.css";
import ProductTitle from "./ProductTitle/ProductTitle";
import CompareButtonsBlock from "./CompareButtonsBlock/CompareButtonsBlock";
import AttributeBlock from "./AttributeBlock/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import QuantityButtonBlock from "./QuantityButtonBlock/QuantityButtonBlock";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import MaterialUiRating from "../../UIUX/NEW_UI/MaterialUIRating/MaterialUIRating";

const ProductInfoBlock = ({singleProduct, price, related, countIncrease, countDecrease, counter, isExistsInCart}) => {
    return (
        <div>
            <ProductTitle title={singleProduct.name}/>
            <div className={classes.ratingCompareBlock}>
                <MaterialUiRating product={singleProduct}/>
                <CompareButtonsBlock product={singleProduct}/>
            </div>
            <AttributeBlock singleProduct={singleProduct}/>
            <PriceBlock regularPrice={price}/>
            <QuantityButtonBlock countDecrease={countDecrease} countIncrease={countIncrease} product={singleProduct} counter={counter} isExistsInCart={isExistsInCart}/>
            <RelatedProducts product={singleProduct} related={related}/>
        </div>
    );
};

export default ProductInfoBlock;