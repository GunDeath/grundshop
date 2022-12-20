import React from 'react';
import classes from './MyOrderCheckTitle.module.css'

const MyOrderCheckTitle = ({children}) => {
    return (
        <div className={classes.myOrderCheckTitle}>
            {children}
        </div>
    );
};

export default MyOrderCheckTitle;