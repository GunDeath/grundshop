import React from 'react';
import classes from "./MyBannerBtn.module.css"
import {Link} from "react-router-dom";

const BannerBtn = () => {
    return (
        <Link to='/catalog/cirkulyacionnye' className={classes.top_banner__link_button}>
            Перейти в каталог
        </Link>
    );
};

export default BannerBtn;