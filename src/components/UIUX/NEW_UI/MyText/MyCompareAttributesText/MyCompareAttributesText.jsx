import React from 'react';
import classes from './MyCompareAttributesText.module.css'

const MyCompareAttributesText = ({children}) => {
    return (
        <p className={classes.myCompareAttributesText}>
            {children}
        </p>
    );
};

export default MyCompareAttributesText;