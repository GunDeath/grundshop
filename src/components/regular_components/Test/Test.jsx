import React, {useEffect, useState} from 'react';
import classes from './Test.module.css'
import CatalogAside from "../../CatalogAside/CatalogAside";
import CatalogItemsLoop from "../../ProductCatalog/CatalogItemsLoop/CatalogItemsLoop";
import {loaderContent} from "../../../dataArrays";
import CatalogLoopLoaderItem from "../../ProductCatalog/CatalogItemsLoop/CatalogLoopLoaderItem/CatalogLoopLoaderItem";

const Test = () => {

    return (
        <div className={classes.mainContainer}>
            {loaderContent.map(product => <CatalogLoopLoaderItem key={product.id} product={product} />)}
        </div>
    );
}

export default Test;