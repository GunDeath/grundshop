import React from 'react';
import classes from "./CatalogItemsLoop.module.css";
import Pagination from "./Pagination/Pagination";
import CatalogSingleProduct from "./CatalogSingleProduct/CatalogSingleProduct";
import {loaderContent} from "../../../dataArrays";
import {Skeleton} from "@mui/material";

const CatalogItemsLoop = (props) => {

    return (
        <section className={classes.catalogMainSection}>
            {
                props.loading
                    ? loaderContent.map((product, index) => <Skeleton variant="rectangular" width={300} height={440} key={index} />)
                    : props.currentRecords.map(product => <CatalogSingleProduct key={product.id} product={product}/>)
            }
            {props.loading ? '' : <Pagination nPages={props.nPages} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />}
        </section>
    );
};

export default CatalogItemsLoop;