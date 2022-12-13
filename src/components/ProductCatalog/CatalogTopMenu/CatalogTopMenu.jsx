import React from 'react';
import CatalogSubCategories from "./CatalogSubCategories/CatalogSubCategories";
import CatalogTopMenuSorting from "./CatalogTopMenuSorting/CatalogTopMenuSorting";

const CatalogTopMenu = ({changeGrid, grid}) => {
    return (
        <div>
            <CatalogSubCategories />
            <CatalogTopMenuSorting changeGrid={changeGrid} grid={grid}/>
        </div>
    );
};

export default CatalogTopMenu;