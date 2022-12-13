import React, {useEffect, useState} from 'react';
import classes from './MySelectElement.module.css'

const MySelectElement = () => {
    const [selectSorting, setSelectSorting] = useState('nameTop')
    switch (selectSorting){
        case 'nameTop' :
            console.log('Sorting by name by top')
            break;
        case 'nameBottom' :
            console.log('Sorting by name by bottom')
            break;
        case 'priceUp' :
            console.log('Sorting by price by top')
            break;
        case 'priceDown' :
            console.log('Sorting by price by bottom')
            break;

    }

    return (
        <select className={classes.selectStyling} onChange={(e) => setSelectSorting(e.target.value)}>
            <option value="nameTop">Сортировка по названию А &darr; Я</option>
            <option value="nameBottom">Сортировка по названию А &uarr; Я</option>
            <option value="priceUp">Сортировка по цене &uarr; </option>
            <option value="priceDown">Сортировка по цене &darr; </option>
        </select>
    );
};

export default MySelectElement;