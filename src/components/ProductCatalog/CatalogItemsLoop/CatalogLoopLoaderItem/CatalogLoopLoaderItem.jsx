import React from 'react';
import classes from "./CatalogLoopLoaderItem.module.css";
import {ClimbingBoxLoader} from 'react-spinners'

const CatalogLoopLoaderItem = () => {
    return (
        <div className={classes.productLoaderItem}>
            <ClimbingBoxLoader color="#003767" />
        </div>
    );
};

export default CatalogLoopLoaderItem;