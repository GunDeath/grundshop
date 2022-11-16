import React from 'react';
import classes from './MyHeaderMainSearch.module.css'
import search_icon from '../../../../../../assets/icons/header_icons/main-header__search-icon.svg'

const HeaderMainSearch = () => {
    return (
        <div className={classes.header_main__search_form}>
            <input type="text" className={classes.header_main__search_input} placeholder="Поиск по сайту" />
            <button className={classes.search_form__button}>
                <img src={search_icon} alt="" className="search_button" />
            </button>
        </div>
    );
};

export default HeaderMainSearch;