import React from 'react';
import classes from './MyHeaderMainMenu.module.css'
import catalog_icon from '../../../../../../assets/icons/header_icons/main-header__active-catalog.svg'


const HeaderMainMenu = () => {

    return (
        <div className={classes.main_header__menu_block}>
            <ul className={classes['main-header__menu-section']}>
                <li className={classes['active_menu_element']}>
                    <img src={catalog_icon} alt="" className={classes.catalog_icon}/>
                    Каталог
                </li>
                <li className={classes.no_active_menu_element}>Главная</li>
                <li className={classes.no_active_menu_element}>Контакты</li>
                <li className={classes.no_active_menu_element}>Доставка</li>
                <li className={classes.no_active_menu_element}>Оплата</li>
            </ul>
        </div>
    );
};

export default HeaderMainMenu;