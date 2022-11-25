import React, {useState} from 'react';
import classes from './ProductImg.module.css'
import MainProductImage from "./MainProductImage/MainProductImage";
import ProductImgCarousel from "./ProductImgCarousel/ProductImgCarousel";

const ProductImg = ({singleProduct, firstImg}) => {

    return (
        <div className={classes.productImgBlock}>
            <MainProductImage img={firstImg} />
            <div className={classes.productCarousel}>
                {singleProduct.map((img, index) =>
                    <ProductImgCarousel img={img} key={img.id} />
                )}
            </div>
        </div>
    );
};

export default ProductImg;