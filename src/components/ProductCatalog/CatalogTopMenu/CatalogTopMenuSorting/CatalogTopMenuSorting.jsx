import React from 'react';
import classes from './CatalogTopMenuSorting.module.css'
import {ReactComponent as ListBtn} from "../../../../assets/icons/catalog/row-layout.svg";
import {ReactComponent as GridBtn} from "../../../../assets/icons/catalog/grid-layout.svg";
import {ReactComponent as ActiveList} from "../../../../assets/icons/catalog/active_list.svg";
import {ReactComponent as ActiveGrid} from "../../../../assets/icons/catalog/active_grid.svg";
import MyBreadCrumbs from "../../../UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";

const CatalogTopMenuSorting = ({changeGrid, grid}) => {
    return (
        <div className={classes.sortingSection}>
            <div className={classes.sortingLeftSection}>
                <div className={classes.catalogLayoutButtons}>
                    <div onClick={()=>changeGrid(false)}>
                        { !grid ? <ActiveList /> : <ListBtn/> }
                    </div>
                    <div onClick={()=>changeGrid(true)}>
                        { grid ? <ActiveGrid /> : <GridBtn/> }
                    </div>
                </div>
                <MyBreadCrumbs url='/catalog' title='Каталог'/>
            </div>
            <div className={classes.sortingRightSection}>Сортировка: по названию</div>
        </div>
    );
};

export default CatalogTopMenuSorting;