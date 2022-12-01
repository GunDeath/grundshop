import React from 'react';
import classes from './MyRegularSmallBtn.module.css'

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