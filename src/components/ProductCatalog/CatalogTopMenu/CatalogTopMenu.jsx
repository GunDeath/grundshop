import React from 'react';
import CatalogSubCategories from "./CatalogSubCategories/CatalogSubCategories";
import CatalogTopMenuSorting from "./CatalogTopMenuSorting/CatalogTopMenuSorting";

const CatalogTopMenu = ({subCategory, changeGrid, grid}) => {
    return (
        <div>
            <CatalogSubCategories subCategory={subCategory} />
            <CatalogTopMenuSorting changeGrid={changeGrid} grid={grid}/>
        </div>
    );
};

export default CatalogTopMenu;