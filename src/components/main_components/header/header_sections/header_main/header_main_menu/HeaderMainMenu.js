import React from 'react';
import classes from './MyHeaderMainMenu.module.css'
import catalog_icon from '../../../../../../assets/icons/header_icons/main-header__active-catalog.svg'
import {NavLink} from "react-router-dom";


const HeaderMainMenu = () => {

    return (
        <div className={classes.main_header__menu_block}>
            <ul className={classes['main-header__menu-section']}>
                <li className={classes['active_menu_element']}>
                    <NavLink to='/catalog'>
                        <img src={catalog_icon} alt="" className={classes.catalog_icon}/>
                        Каталог
                    </NavLink>
                </li>
                <li className={classes.no_active_menu_element}>
                    <NavLink to='/' className={classes.header_link}>
                        Главная
                    </NavLink>
                </li>
                <li className={classes.no_active_menu_element}>Контакты</li>
                <li className={classes.no_active_menu_element}>Доставка</li>
                <li className={classes.no_active_menu_element}>Оплата</li>
            </ul>
        </div>
    );
};

export default HeaderMainMenu;