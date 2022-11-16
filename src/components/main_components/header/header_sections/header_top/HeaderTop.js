import React from 'react';
import classes from './MyHeaderTop.module.css'
import HeaderTopLeft from "./header_top_left/HeaderTopLeft";
import HeaderTopRight from "./header_top_right/HeaderTopRight";

const HeaderTop = () => {
    return (
        <div className={classes['top-header__top-section']}>
            <HeaderTopLeft />
            <HeaderTopRight />
        </div>
    );
};

export default HeaderTop;