import React from 'react';
import classes from './MyAttributeText.module.css'

const MyAttributeText = ({children}) => {
    return (
        <p className={classes.attributeText}>
            {children}
        </p>
    );
};

export default MyAttributeText;