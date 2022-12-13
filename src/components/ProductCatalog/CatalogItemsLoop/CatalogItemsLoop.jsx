import React from 'react';
import classes from "./CatalogItemsLoop.module.css";
import MyPagination from "../../UIUX/NEW_UI/MyBlocks/MyPagination/MyPagination";
import {loaderContent} from "../../../dataArrays";
import {Skeleton} from "@mui/material";
import HorizontalProductCard from "../../UIUX/NEW_UI/MyBlocks/HorizontalProductCart/HorizontalProductCard";
import GridProductCard from "../../UIUX/NEW_UI/MyBlocks/GridProductCard/GridProductCard";

const CatalogItemsLoop = (props) => {

    return (
        <React.Fragment>
            <section className={ props.grid ? classes.catalogMainSection : classes.catalogMainSectionHorizontal} >
                {
                    props.loading
                        ? loaderContent.map((product, index) => <Skeleton variant="rectangular" width={300} height={440} key={index} />)
                        : props.grid
                            ? props.currentRecords.map(product => <GridProductCard key={product.id} product={product}/>)
                            : props.currentRecords.map(product => <HorizontalProductCard key={Math.random()+2} product={product}/>)
                }
            </section>
            <div className={classes.paginationBlock}>
                {props.loading
                    ? ''
                    : props.nPages > 1
                        ?  <MyPagination nPages={props.nPages} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}/>
                        : ''
                }
            </div>
        </React.Fragment>
    );
};

export default CatalogItemsLoop;