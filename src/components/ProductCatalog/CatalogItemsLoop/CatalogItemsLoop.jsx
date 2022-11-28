import React from 'react';
import classes from "./CatalogItemsLoop.module.css";
import Pagination from "./Pagination/Pagination";
import CatalogSingleProduct from "./CatalogSingleProduct/CatalogSingleProduct";
import CatalogLoopLoaderItem from "./CatalogLoopLoaderItem/CatalogLoopLoaderItem";
import {loaderContent} from "../../../dataArrays";

const CatalogItemsLoop = (props) => {

    return (
        <section className={classes.catalogMainSection}>
            {
                props.loading
                    ? loaderContent.map(product => <CatalogLoopLoaderItem key={product.id} product={product} />)
                    : props.currentRecords.map(product => <CatalogSingleProduct key={product.id} product={product} />)
            }
            {props.loading ? '' : <Pagination nPages={props.nPages} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />}
        </section>
    );
};

export default CatalogItemsLoop;