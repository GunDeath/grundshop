import React from 'react';
import classes from './MyRegularSmallBtn.module.css'
import {logDOM} from "@testing-library/react";

const MyRegularSmallBtn = ({children, change, activeTab}) => {
    return (
        <button
            disabled={activeTab}
            onClick={()=>change()}
            className={ activeTab ? `${classes.myRegularSmallBtn} ${classes.myRegularSmallBtnDisable}` : `${classes.myRegularSmallBtn}`}
        >
            {children}
        </button>
    );
};

export default MyRegularSmallBtn;