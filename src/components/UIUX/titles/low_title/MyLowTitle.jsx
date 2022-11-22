import React from 'react';
import classes from './MyLowTitle.module.css'

const MyLowTitle = ({children}) => {
    return (
        <h4 className={classes.title_styles}>
            {children}
        </h4>
    );
};

export default MyLowTitle;