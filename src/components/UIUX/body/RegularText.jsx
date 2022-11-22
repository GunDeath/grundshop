import React from 'react';
import classes from './MyRegularText.module.css'

const RegularText = ({children}) => {
    return (
        <p className={classes.bodyStyles}>
            {children}
        </p>
    );
};

export default RegularText;