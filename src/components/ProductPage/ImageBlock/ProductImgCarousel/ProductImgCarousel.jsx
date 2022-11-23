import React from 'react';
import classes from './ProductImgCarousel.module.css'

const ProductImgCarousel = ({img}) => {
    return (
        <div className={classes.singleCarouselImg}>
            <img src={img.src} alt={img.alt} className={classes.img}/>
        </div>
    );
};

export default ProductImgCarousel;