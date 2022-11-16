import React from 'react';
import classes from './MyHeaderBottom.module.css'
import HeaderBottomRight from "./header_bottom_right/HeaderBottomRight";
import HeaderBottomLeft from "./header_bottom_left/HeaderBottomLeft";

const HeaderBottom = () => {
    return (
        <div className={classes.bottom_header__section}>
            <HeaderBottomLeft />
            <HeaderBottomRight/>
        </div>
    );
};

export default HeaderBottom;