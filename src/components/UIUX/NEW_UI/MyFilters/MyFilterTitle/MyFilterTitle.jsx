import React from 'react';
import classes from './MyFilterTitle.module.css'

const MyFilterTitle = ({children}) => {
    return (
        <p className={classes.MyFilterTitle}>
            {children}
        </p>
    );
};

export default MyFilterTitle;