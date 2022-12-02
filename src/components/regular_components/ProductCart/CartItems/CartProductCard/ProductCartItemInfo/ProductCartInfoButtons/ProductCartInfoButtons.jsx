import React from 'react';
import classes from './ProductCartInfoButtons.module.css'

const ProductCartInfoButtons = () => {
    return (
        <div className={classes.addingBtnBlock}>
            <div className={classes.addingBtn}>В избранное</div>
            <div className={classes.addingBtn}>Удалить</div>
        </div>
    );
};

export default ProductCartInfoButtons;