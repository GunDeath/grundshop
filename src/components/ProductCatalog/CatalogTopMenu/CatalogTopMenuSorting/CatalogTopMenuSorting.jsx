import React from 'react';
import classes from './CatalogTopMenuSorting.module.css'
import CatalogTopMenuGridSortingSection from "./CatalogTopMenuGridSortingSection/CatalogTopMenuGridSortingSection";

const CatalogTopMenuSorting = ({changeGrid, grid}) => {
    return (
        <div className={classes.sortingSection}>
            <CatalogTopMenuGridSortingSection changeGrid={changeGrid} grid={grid}/>
            <div className={classes.sortingRightSection}>Сортировка: по названию</div>
        </div>
    );
};

export default CatalogTopMenuSorting;