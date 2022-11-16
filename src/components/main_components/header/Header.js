import React from 'react';
import header from './MyHeader.module.css'
import HeaderTop from "./header_sections/header_top/HeaderTop";
import HeaderMain from "./header_sections/header_main/HeaderMain";
import HeaderBottom from "./header_sections/header_bottom/HeaderBottom";

const Header = () => {
    return (
        <header className={header.header_main_styles}>
            <div className={header['main-header__section-wrapper']}>
                <HeaderTop />
                <HeaderMain />
                <HeaderBottom />
            </div>
        </header>
    );
};

export default Header;