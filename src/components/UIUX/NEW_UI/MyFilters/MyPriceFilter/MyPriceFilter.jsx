import React, {useEffect, useState} from 'react';
import classes from './MyPriceFilter.module.css'
import MyFilterTitle from "../MyFilterTitle/MyFilterTitle";
import {Slider} from "@mui/material";
import MyPriceFilterSpan from "./MyPriceFilterSpan/MyPriceFilterSpan";
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const MyPriceFilter = ({filterProductsList}) => {
    const {singleCategory, goodsList} = useTypedSelector(state => state)
    const [maxPrice, setMaxPrice] = useState(0)
    const [filterValue, setFilterValue] = useState([0, Math.round(maxPrice)])
    const handleChange = (event, newValue) => {setFilterValue(newValue)};
    const {addFilterProductsToList} = useActions();

    useEffect(()=>{
        if (Array.isArray(singleCategory) && singleCategory.length !== 0 && singleCategory[0] !== undefined) {
            if(Array.isArray(goodsList) && goodsList.length !==0 ){
                setMaxPrice(Math.max(...goodsList.filter(product => product.categories[0].slug === singleCategory[0].slug).map(o => o.price)))
            }
        }
    }, [singleCategory, goodsList])

    useEffect(()=>{
        addFilterProductsToList(filterProductsList.filter(product => product.price < filterValue[1] && product.price > filterValue[0]))
    }, [filterValue])

    useEffect(()=>{ setFilterValue([0, Math.round(maxPrice)])}, [maxPrice])

    return (
        <div className={classes.MyPriceFilter}>
            <MyFilterTitle>Цена</MyFilterTitle>
            <Slider
                max={Math.round(maxPrice)}
                value={filterValue}
                onChange={handleChange}
                valueLabelDisplay='auto'
            />
            <div className={classes.MyPriceFilterInputsBlock}>
                <MyPriceFilterSpan>{filterValue[0]}</MyPriceFilterSpan>
                <MyPriceFilterSpan>{filterValue[1]}</MyPriceFilterSpan>
            </div>
        </div>
    );
};

export default MyPriceFilter;