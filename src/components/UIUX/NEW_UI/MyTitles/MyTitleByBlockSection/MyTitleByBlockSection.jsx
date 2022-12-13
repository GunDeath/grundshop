import React from 'react';
import classes from './MyTitleByBlockSection.module.css'

const MyTitleByBlockSection = ({children}) => {
    return (
        <h2 className={classes.myTitleByBlockSection}>
            {children}
        </h2>
    );
};

export default MyTitleByBlockSection;