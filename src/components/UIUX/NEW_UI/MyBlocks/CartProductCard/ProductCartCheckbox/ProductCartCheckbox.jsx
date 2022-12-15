import React, {useState} from 'react';
import classes from './ProductCartCheckbox.module.css'
import Checkbox from "@mui/material/Checkbox";
import {useActions} from "../../../../../../store/hooks/useActions";


const ProductCartCheckbox = ({product, selected}) => {
    const {addCartItem} = useActions()
    const [localChecked, setLocalChecked] = useState(false)
    return (
        <div className={classes.checkboxBlock}>
            <Checkbox label="Label" onClick={ () => {
                addCartItem(product)
                setLocalChecked(true)
            }} checked={selected || localChecked}/>
        </div>
    );
};

export default ProductCartCheckbox;