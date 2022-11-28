import React from 'react';
import classes from './MyRegularText.module.css'

const RegularText = ({children}) => {
    return (
        <span className={classes.bodyStyles}>
            {children}
        </span>
    );
};

export default RegularText;