import React from 'react';
import classes from './ProductImgCarousel.module.css'

const ProductImgCarousel = ({img, index, changeMainImg}) => {
    return (
        <div className={classes.singleCarouselImg} onClick={()=>changeMainImg(index)}>
            <img src={img.src} alt={img.alt} className={classes.img}/>
        </div>
    );
};

export default ProductImgCarousel;