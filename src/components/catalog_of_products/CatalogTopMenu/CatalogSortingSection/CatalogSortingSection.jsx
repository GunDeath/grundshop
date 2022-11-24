import React from 'react';
import classes from './CatalogSortingSection.module.css'
import {ReactComponent as ListBtn} from "../../../../assets/icons/catalog/row-layout.svg";
import {ReactComponent as GridBtn} from "../../../../assets/icons/catalog/grid-layout.svg";

const CatalogSortingSection = () => {
    return (
        <div className={classes.sortingSection}>
            <div className={classes.sortingLeftSection}>
                <div className={classes.catalogLayoutButtons}>
                    <div><ListBtn/></div>
                    <div><GridBtn/></div>
                </div>
                <div className={classes.breadcrumbs}>Главная > Церкуляционные > Повысительные</div>
            </div>
            <div className={classes.sortingRightSection}>Сортировка: по популярности</div>
        </div>
    );
};

export default CatalogSortingSection;