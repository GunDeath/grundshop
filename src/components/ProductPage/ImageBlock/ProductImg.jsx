import React, {useState} from 'react';
import classes from './ProductImg.module.css'
import MainProductImage from "./MainProductImage/MainProductImage";
import ProductImgCarousel from "./ProductImgCarousel/ProductImgCarousel";

const ProductImg = ({singleProduct, firstImg}) => {
    const [imgIndex, setImgIndex] = useState(0)
    const changeMainImg = (index) => setImgIndex(index)

    return (
        <div className={classes.productImgBlock}>
            <MainProductImage img={singleProduct[imgIndex] || {src: ''}} />
            <div className={classes.productCarousel}>
                {singleProduct.map((img, index) =>
                    <ProductImgCarousel index={index} img={img} key={img.id} changeMainImg={changeMainImg} />
                )}
            </div>
        </div>
    );
};

export default ProductImg;