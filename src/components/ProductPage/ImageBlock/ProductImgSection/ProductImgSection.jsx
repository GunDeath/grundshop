import React from 'react';
import classes from './ProductImgSection.module.css'
import ProductImgBlock from "../ProductImgBlock/ProductImgBlock";

const ProductImgSection = ({singleProduct}) => {
    return (
        <div>
            {singleProduct.images.map((img, index) =>
                <div key={img.id}>
                    <ProductImgBlock img={img} index={index}/>
                </div>
            )}
        </div>
    );
};

export default ProductImgSection;