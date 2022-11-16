import React from 'react';
import classes from './MyHeaderActions.module.css'
import wishlist_icon from '../../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg'
import compare_icon from '../../../../../../assets/icons/header_icons/main-header__compare-icon.svg'

const HeaderActions = () => {
    return (
        <div className={classes.main_header__actions_block}>
            <img src={wishlist_icon} alt="" className={classes.action_button}/>
            <img src={compare_icon} alt="" className={classes.action_button}/>
        </div>
    );
};

export default HeaderActions;