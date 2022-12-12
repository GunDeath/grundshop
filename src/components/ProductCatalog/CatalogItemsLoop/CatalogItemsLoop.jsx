import React from 'react';
import classes from "./CatalogItemsLoop.module.css";
import MyPagination from "../../UIUX/NEW_UI/MyBlocks/MyPagination/MyPagination";
import CatalogSingleProduct from "./CatalogSingleProduct/CatalogSingleProduct";
import {loaderContent} from "../../../dataArrays";
import {Skeleton} from "@mui/material";
import HorizontalProductCard from "../../UIUX/NEW_UI/MyBlocks/HorizontalProductCart/HorizontalProductCard";

const CatalogItemsLoop = (props) => {

    return (
        <section className={ props.grid ? classes.catalogMainSection : classes.catalogMainSectionHorizontal} >
            {
                props.loading
                    ? loaderContent.map((product, index) => <Skeleton variant="rectangular" width={300} height={440} key={index} />)
                    : props.grid
                        ? props.currentRecords.map(product => <CatalogSingleProduct key={product.id} product={product}/>)
                        : props.currentRecords.map(product => <HorizontalProductCard key={Math.random()+2} product={product}/>)
            }
            {props.loading ? '' : <MyPagination nPages={props.nPages} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} categoryID={props.categoryID}/>}
        </section>
    );
};

export default CatalogItemsLoop;