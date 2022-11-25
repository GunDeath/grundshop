import React from 'react';
import classes from './RelatedProducts.module.css';
import ProductSmallTabs from "./ProductSmallTabs/ProductSmallTabs";
import RelatedSmallBlock from "../../../UIUX/RelatedSmallBlock/RelatedSmallBlock";

const RelatedProducts = ({product}) => {
    return (
        <div className={classes.relatedProductInfoProductBlock}>
            <ProductSmallTabs />
            <RelatedSmallBlock products={product} />
        </div>
    );
};

export default RelatedProducts;