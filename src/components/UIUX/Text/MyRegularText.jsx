import React from 'react';
import classes from './MyRegularText.module.css'

const MyRegularText = ({children}) => {
    return (
        <p className={classes.myRegularText}>
            {children}
        </p>
    );
};

export default MyRegularText;