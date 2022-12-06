import React, {useEffect} from 'react';
import classes from './HorizontalProductCardCloseBlock.module.css'
import close_big from '../../../../../../assets/icons/actions/close_big.svg'
import {useActions} from "../../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";

const HorizontalProductCardCloseBlock = ({product}) => {
    const {wishlistRemoveItem} = useActions()
    const {wishlist} = useTypedSelector(state => state)
    useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist))}, [wishlist])

    return (
        <img src={close_big} alt="" className={classes.closeImg} onClick={()=>wishlistRemoveItem(product)}/>
    );
};

export default HorizontalProductCardCloseBlock;