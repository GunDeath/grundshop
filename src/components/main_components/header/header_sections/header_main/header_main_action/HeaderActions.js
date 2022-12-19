import React from 'react';
import classes from './MyHeaderActions.module.css'
import wishlist_icon from '../../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg'
import compare_icon from '../../../../../../assets/icons/header_icons/main-header__compare-icon.svg'
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import MyWishlist from "../../../../../UIUX/NEW_UI/MyActionButtons/MyWishlist/MyWishlist";
import MyCompare from "../../../../../UIUX/NEW_UI/MyActionButtons/MyCompare/MyCompare";

const HeaderActions = () => {
    const {wishlist, compare} = useTypedSelector(state => state)
    return (
        <div className={classes.main_header__actions_block}>
            <MyWishlist headerIcon={true} />
            <MyCompare headerIcon={true}/>
        </div>
    );
};

export default HeaderActions;