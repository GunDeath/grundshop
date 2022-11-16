import React from 'react';
import classes from './MyHeaderTopRight.module.css'
import phone_icon from "../../../../../../assets/icons/header_icons/top-header__phone-icon.svg";

const HeaderTopRight = () => {
    return (
        <div className={classes['top-header__right-section']}>
            <img src={phone_icon} alt="" className={classes['top-header__phone-icon']}/>
            <p className={classes['top-header__phone-text']}>
                8 (499) 460-67-61
                <span className={classes['top-header__phone-span']}>(Мск)</span>
            </p>
            <p className={classes['top-header__phone-text']}>
                8 (812) 748-22-35
                <span className={classes['top-header__phone-span']}>(СПб)</span>
            </p>
            <p className={classes['top-header__phone-text']}>
                8 (499) 288-74-79
                <span className={classes['top-header__phone-span']}>(Сервисный центр)</span>
            </p>
        </div>
    );
};

export default HeaderTopRight;