import React from 'react';
import classes from './CatalogTopMenu.module.css'
import CatalogSubCategory from "./CatalogSubCategory/CatalogSubCategory";
import CatalogSortingSection from "./CatalogSortingSection/CatalogSortingSection";

const CatalogTopMenu = () => {
    return (
        <div className={classes.catalogTopMenu}>
            <CatalogSubCategory />
            <CatalogSortingSection />
        </div>
    );
};

export default CatalogTopMenu;