import React, {useState, useEffect} from 'react';
import {api} from "../../woocommerce_api";
import classes from "./ProductCatalog.module.css";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import {subCategoryFunction} from "../../customFunctions";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";
import {useParams} from "react-router-dom";

const ProductCatalog = () => {
    const params = useParams()
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categoryID, setCategoryID] = useState(params.id || 16)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [subCategory, setSubCategory] = useState([])
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        setCategoryID(params.id)
    }, [params.id])

    useEffect(() => {
        setLoading(true)
        if (categoryID !== undefined) {
            api.get(`products?category=${categoryID}`)
                .then((response) => {
                    if (response.status === 200) {
                        setProductsByCategory(response.data)
                        setLoading(false)
                    }
                })
                .catch((error) => {
                })
            subCategoryFunction(categoryID, setSubCategory);
        }
    }, [categoryID])

    const currentRecords = productsByCategory.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(productsByCategory.length / recordsPerPage)

    return (
        <div className={classes.catalogMainContent}>
            <CatalogTopMenu subCategory={subCategory}/>
            <CatalogItemsLoop
                currentRecords={currentRecords}
                loading={loading}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductCatalog;