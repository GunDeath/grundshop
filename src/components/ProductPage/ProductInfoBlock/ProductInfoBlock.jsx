import React from 'react';
import classes from "./ProductInfoBlock.module.css";
import ProductTitle from "./ProductTitle/ProductTitle";
import rating_icons from "../../../assets/icons/product-cart__rating.svg";
import CompareButtonsBlock from "./CompareButtonsBlock/CompareButtonsBlock";
import AttributeBlock from "./AttributeBlock/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import QuantityButtonBlock from "./QuantityButtonBlock/QuantityButtonBlock";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";

const ProductInfoBlock = ({singleProduct, price, getQuantity, related}) => {
    const {cart} = useTypedSelector(state => state)
    console.log('Cart')
    console.log(cart)
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
            <QuantityButtonBlock getQuantity={getQuantity} product={singleProduct}/>
            <RelatedProducts product={singleProduct} related={related}/>
        </div>
    );
};

export default ProductInfoBlock;