import React from 'react';
import classes from './ProductCartCheckbox.module.css'
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductCartCheckbox = () => {
    return (
        <div className={classes.checkboxBlock}>
            <Checkbox {...label} />
        </div>
    );
};

export default ProductCartCheckbox;