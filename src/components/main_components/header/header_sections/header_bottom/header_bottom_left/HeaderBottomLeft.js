import React from 'react';
import classes from './MeHeaderBottom.module.css'
import clock_icon from '../../../../../../assets/icons/header_icons/top-header__clock-icon.svg'

const HeaderBottomLeft = () => {
    return (
        <div className={classes.bottom_header__left_section}>
            <img src={clock_icon} alt="" className={classes.clock_icon}/>
            <p className={classes.bottom_header__left_section__text}>
                Работаем ежедневно с 09:00 до 01:00
            </p>
        </div>
    );
};

export default HeaderBottomLeft;