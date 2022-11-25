import React from 'react';
import classes from './MyRegularSmallBtn.module.css'

const MyRegularSmallBtn = ({children}) => {
    return (
        <button className={classes.myRegularSmallBtn}>
            {children}
        </button>
    );
};

export default MyRegularSmallBtn;