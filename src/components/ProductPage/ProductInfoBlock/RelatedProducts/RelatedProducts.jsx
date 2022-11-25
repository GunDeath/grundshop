import React from 'react';
import classes from './RelatedProducts.module.css';
import ProductSmallTabs from "./ProductSmallTabs/ProductSmallTabs";
import RelatedSmallBlock from "../../../UIUX/RelatedSmallBlock/RelatedSmallBlock";

const RelatedProducts = ({product, related}) => {
    return (
        <div className={classes.relatedProductInfoProductBlock}>
            <ProductSmallTabs />
            <div className={classes.relatedProductBlock}>
                {related.map(product =>
                    <RelatedSmallBlock product={product} key={product.id}/>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;