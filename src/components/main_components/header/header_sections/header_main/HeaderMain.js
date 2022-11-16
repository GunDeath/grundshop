import React from 'react';
import classes from './MyHeaderMain.module.css'
import HeaderMainLogo from "./header_main_logo/HeaderMainLogo";
import HeaderMainMenu from "./header_main_menu/HeaderMainMenu";
import HeaderMainSearch from "./header_main_search_form/HeaderMainSearch";
import HeaderActions from "./header_main_action/HeaderActions";
import HeaderCart from "./header_main_cart/HeaderCart";

const HeaderMain = () => {
    return (
        <div className={classes['main-header__section']}>
            <HeaderMainLogo />
            <HeaderMainMenu/>
            <HeaderMainSearch />
            <HeaderActions />
            <HeaderCart />
        </div>
    );
};

export default HeaderMain;