import React from 'react';
import classes from './CompareButtonsBlock.module.css'
import MyCompare from "../../../UIUX/NEW_UI/MyActionButtons/MyCompare/MyCompare";
import MyWishlist from "../../../UIUX/NEW_UI/MyActionButtons/MyWishlist/MyWishlist";

const CompareButtonsBlock = ({product}) => {
    return (
        <div className={classes.actionButtonsBlock}>
            <MyCompare product={product} extended={true} />
            <MyWishlist product={product} extended={true} />
        </div>
    );
};

export default CompareButtonsBlock;