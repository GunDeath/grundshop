import React from 'react';
import classes from './MyOrderTitle.module.css'

const MyOrderTitle = ({children}) => {
    return (
        <p className={classes.myOrderTitle}>
            {children}
        </p>
    );
};

export default MyOrderTitle;