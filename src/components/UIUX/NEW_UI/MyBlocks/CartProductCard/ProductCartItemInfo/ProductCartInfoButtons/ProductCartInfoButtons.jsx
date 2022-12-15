import React from 'react';
import classes from './ProductCartInfoButtons.module.css'
import {useActions} from "../../../../../../../store/hooks/useActions";

const ProductCartInfoButtons = ({product}) => {
    const {removeItem} = useActions()
    return (
        <div className={classes.addingBtnBlock}>
            <div className={classes.addingBtn}>В избранное</div>
            <div
                className={classes.addingBtn}
                onClick={()=>{
                    removeItem(product)
                }}
            >
                Удалить
            </div>
        </div>
    );
};

export default ProductCartInfoButtons;