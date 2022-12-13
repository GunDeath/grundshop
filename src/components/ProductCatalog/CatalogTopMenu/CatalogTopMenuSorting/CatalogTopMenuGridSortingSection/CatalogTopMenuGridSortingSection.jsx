import React from 'react';
import classes from './CatalogTopMenuGridSortingSection.module.css'
import CatalogTopMenuSortingGridButtons from "../CatalogTopMenuSortingGridButtons/CatalogTopMenuSortingGridButtons";
import MyBreadCrumbs from "../../../../UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";

const CatalogTopMenuGridSortingSection = ({changeGrid, grid}) => {
    return (
        <div className={classes.sortingLeftSection}>
            <CatalogTopMenuSortingGridButtons changeGrid={changeGrid} grid={grid}/>
            <MyBreadCrumbs url='/catalog' title='Каталог'/>
        </div>
    );
};

export default CatalogTopMenuGridSortingSection;