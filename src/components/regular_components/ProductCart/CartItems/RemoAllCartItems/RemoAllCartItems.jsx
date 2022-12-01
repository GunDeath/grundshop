import React from 'react';
import classes from './RemoAllCartItems.module.css'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RemoAllCartItems = () => {
    return (
        <div className={classes.removeAll}>
            <div className={classes.leftPart}>
                <div className={classes.checkboxBlock}>
                    <Checkbox {...label} />
                    <div className={classes.checkAll}>Выбрать все</div>
                </div>
                <div className={classes.regularText}>
                    Выбрано товаров: 3
                </div>
            </div>
            <div className={classes.regularText}>
                Удалить выбранное
            </div>
        </div>
    );
};

export default RemoAllCartItems;