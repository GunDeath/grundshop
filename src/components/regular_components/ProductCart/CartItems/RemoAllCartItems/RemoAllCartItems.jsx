import React from 'react';
import classes from './RemoAllCartItems.module.css'
import Checkbox from '@mui/material/Checkbox';
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../../store/hooks/useActions";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const RemoAllCartItems = ({checkSelected}) => {
    const {cartRemove, cart} = useTypedSelector(state => state)
    const {removeCartList, removeItem, addCartItems} = useActions()
    const deleteCartItems = (prodArray) => {
        prodArray.map(prod => {
            removeItem(prod)
            removeCartList(prod)
        })
        console.log(cart)
        localStorage.removeItem('cart');
    }
    console.log(cartRemove)
    return (
        <div className={classes.removeAll}>
            <div className={classes.leftPart}>
                <div className={classes.checkboxBlock}>
                    <Checkbox {...label} onClick={() => {
                        checkSelected()
                        addCartItems(cart)
                        console.log(cartRemove)
                    }}/>
                    <div className={classes.checkAll}>Выбрать все</div>
                </div>
                <div className={classes.regularText}>
                    Выбрано товаров: 3
                </div>
            </div>
            <div className={cartRemove.length !== 0 ? classes.regularText : classes.regularTextDisabled}
                 onClick={() => {
                     deleteCartItems(cartRemove)
                 }}>
                Удалить выбранное
            </div>
        </div>
    );
};

export default RemoAllCartItems;