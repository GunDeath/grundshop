import React from 'react';
import classes from './ProductImgBlock.module.css'
import MainProductImage from "./MainProductImage/MainProductImage";
import ProductImgCarousel from "./ProductImgCarousel/ProductImgCarousel";

const ProductImgBlock = ({img, index}) => {
    return (
        <>
            {index === 0
                ? <MainProductImage img={img}/>
                : <div className={classes.carouselBlock}><ProductImgCarousel img={img}/></div>
            }
        </>
    );
};

export default ProductImgBlock;