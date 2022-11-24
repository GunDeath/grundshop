import React from 'react';
import classes from './MyTitleFilter.module.css';

const MyTitleFilter = ({children}) => {
    return (
        <p className={classes.myTitleFilter}>
            {children}
        </p>
    );
};

export default MyTitleFilter;