import React from 'react';
import classes from "./MyBannerBtn.module.css"
const BannerBtn = (props) => {
    return (
        <a href={props.link} className={classes.top_banner__link_button}>
            Перейти в каталог
        </a>
    );
};

export default BannerBtn;