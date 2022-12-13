import React from 'react';
import classes from './GridProductMainImg.module.css'
import default_img from "../../../../../../../assets/img/default_img.png";

const GridProductMainImg = ({product}) => {
    return (
        <React.Fragment>
            <img
                src={product.images.length !== 0 ? product.images[0].src : default_img}
                alt={product.images.alt === '' ? `Купить ${product.name} в Москве` : product.images.alt}
                className={classes.gridProductCartImgItem}
            />
        </React.Fragment>
    );
};

export default GridProductMainImg;