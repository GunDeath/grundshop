import React from 'react';
import classes from './MyHeaderMainLogo.module.css'
import logo from '../../../../../../assets/img/main-header__grundfos-logo.svg'
import {Link} from "react-router-dom";

const HeaderMainLogo = () => {
    return (
        <Link to='/' className={classes['main-header__logo-block']}>
            <img src={logo} alt="" className={classes['main-header__img']}/>
            <p className={classes['main-header__logo-text']}>Официальный партнер Grundfos</p>
        </Link>
    );
};

export default HeaderMainLogo;