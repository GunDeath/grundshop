import React, {useState, useEffect} from 'react';
import {api} from "../../woocommerce_api";
import classes from "./ProductCatalog.module.css";
import CatalogAside from "../CatalogAside/CatalogAside";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import {subCategoryFunction} from "../../customFunctions";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";

const ProductCatalog = () => {
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categoryID, setCategoryID] = useState(16)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [subCategory, setSubCategory] = useState([])
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(()=>{
        api
            .get(`products?category=${categoryID}`)
            .then((response) => {
                if(response.status === 200){
                    setProductsByCategory(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {});
        subCategoryFunction(categoryID, setSubCategory);
    }, [categoryID])

    const changeCategory = (newID) => {setCategoryID(newID)}
    const currentRecords = productsByCategory.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(productsByCategory.length / recordsPerPage)

    return (
        <div className={classes.catalogMainLayout}>
            <div className={classes.catalogWrapper}>
                <CatalogAside isCatalog={true} change={changeCategory} loading={loading} setLoading={setLoading}/>
                <div className={classes.catalogMainContent}>
                    <CatalogTopMenu subCategory={subCategory} />
                    <CatalogItemsLoop
                        currentRecords={currentRecords}
                        loading={loading}
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;