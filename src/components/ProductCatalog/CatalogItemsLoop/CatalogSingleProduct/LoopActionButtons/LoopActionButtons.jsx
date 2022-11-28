import React from 'react';
import classes from './LoopActionButtons.module.css'
import compare_icon from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";
import wishlist_icons from "../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg";

const LoopActionButtons = () => {
    return (
        <div className={classes.productCartActionButtons}>
            <img src={compare_icon} alt=""/>
            <img src={wishlist_icons} alt=""/>
        </div>
    );
};

export default LoopActionButtons;