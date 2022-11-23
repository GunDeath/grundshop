import React from 'react';
import classes from './MainProductImage.module.css'

const MainProductImage = ({img}) => {
    return (
        <div className={classes.mainProductImageBlock}>
            <img src={img.src} alt={img.alt} className={classes.img}/>
        </div>
    );
};

export default MainProductImage;