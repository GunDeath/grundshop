import React from 'react';
import classes from './MyNormalRegularBtn.module.css'

const MyNormalRegularBtn = ({children}) => {
    return (
        <button className={classes.myNormalRegularBtn}>
            {children}
        </button>
    );
};

export default MyNormalRegularBtn;