import React from 'react';
import classes from './MyRegularSmallBtn.module.css'
import {logDOM} from "@testing-library/react";

const MyRegularSmallBtn = ({children, change}) => {
    return (
        <button onClick={()=>change()} className={classes.myRegularSmallBtn}>
            {children}
        </button>
    );
};

export default MyRegularSmallBtn;