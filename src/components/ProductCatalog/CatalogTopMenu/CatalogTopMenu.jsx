import React from 'react';
import CatalogSubCategories from "./CatalogSubCategories/CatalogSubCategories";
import CatalogTopMenuSorting from "./CatalogTopMenuSorting/CatalogTopMenuSorting";

const CatalogTopMenu = ({subCategory}) => {
    return (
        <div>
            <CatalogSubCategories subCategory={subCategory} />
            <CatalogTopMenuSorting />
        </div>
    );
};

export default CatalogTopMenu;