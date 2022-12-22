import React from 'react';
import classes from './MyPriceFilterInput.module.css'

const MyPriceFilterInput = ({...props}) => {
    return (
        <input {...props} type="text" className={classes.MyPriceFilterInput}/>
    );
};

export default MyPriceFilterInput;