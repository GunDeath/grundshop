import React from 'react';
import classes from './MyHeaderTopLeft.module.css'
import message from "../../../../../../assets/icons/header_icons/top-header__message-icon.svg";

const HeaderTopLeft = () => {
    return (
        <div className={classes['top-header__left-section']}>
            <img src={message}
                 alt=""
                 className={classes['top-header__message-icon']}
            />
            <p className={classes['top-header__text']}>spb@grundshop.ru</p>
            <p className={classes['top-header__text']}>info@grundshop.ru</p>
        </div>
    );
};

export default HeaderTopLeft;