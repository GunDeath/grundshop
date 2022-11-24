import React from 'react';
import classes from './CompareButtonsBlock.module.css'
import CompareButton from "./CompareButton/CompareButton";
import WishlistButton from "./WishlistButton/WishlistButton";

const CompareButtonsBlock = () => {
    return (
        <div className={classes.actionButtonsBlock}>
            <div>
                <CompareButton />
            </div>
            <div>
                <WishlistButton />
            </div>
        </div>
    );
};

export default CompareButtonsBlock;