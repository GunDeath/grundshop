import React from 'react';
import classes from './MyHeaderMainLogo.module.css'
import logo from '../../../../../../assets/img/main-header__grundfos-logo.svg'

const HeaderMainLogo = () => {
    return (
        <div className={classes['main-header__logo-block']}>
            <img src={logo} alt="" className={classes['main-header__img']}/>
            <p className={classes['main-header__logo-text']}>Официальный партнер Grundfos</p>
        </div>
    );
};

export default HeaderMainLogo;