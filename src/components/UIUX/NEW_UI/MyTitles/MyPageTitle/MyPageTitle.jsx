import React from 'react';
import classes from './MyPageTitle.module.css'

const MyPageTitle = ({children}) => {
    return (
        <h1 className={classes.titleStyles}>
            {children}
        </h1>
    );
};

export default MyPageTitle;