import React from 'react';
import classes from './MyHeaderActions.module.css'
import wishlist_icon from '../../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg'
import compare_icon from '../../../../../../assets/icons/header_icons/main-header__compare-icon.svg'
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";

const HeaderActions = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <div className={classes.main_header__actions_block}>
            <Link to='/catalog/wishlist' className={classes.linkBlock}>
                <img src={wishlist_icon} alt="" className={classes.action_button}/>
                <span className={classes.countSpan}>
                    {wishlist.length}
                </span>
            </Link>
            <img src={compare_icon} alt="" className={classes.action_button}/>
        </div>
    );
};

export default HeaderActions;