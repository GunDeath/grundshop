import React from 'react';
import classes from './MyCatalogBanner.module.css'
import main_banner from '../../../../../assets/img/main_background_slider.png'

const MyCatalogBanner = () => {
    return (
        <div className={classes.bannerWrapper}>
            <img src={main_banner} alt="" className={classes.bannerImg}/>
            <div className={classes.h1Section}>
                <h1 className={classes.bannerH1}>Каталог</h1>
            </div>
        </div>
    );
};

export default MyCatalogBanner;