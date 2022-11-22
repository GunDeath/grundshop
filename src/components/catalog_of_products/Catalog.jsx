import React, {useState, useEffect} from 'react';
import classes from './MyCatalog.module.css'
import {api} from "../../woocommerce_api";
import ProductCatalog from "./catalog_list/ProductCatalog";
import CatalogAside from "../CatalogAside/CatalogAside";


const Catalog = () => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const [categoryID, setCategoryID] = useState(16)


    useEffect(()=>{
        axiosProducts(categoryID);
    }, [categoryID])

    let axiosProducts = (categoryID) => {
        api
            .get(`products?category=${categoryID}`)
            .then((response) => {
                if(response.status === 200){
                    setCategoryProducts(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {});
    }

    const changeCategory = (newID) => {setCategoryID(newID)}


    const currentRecords = categoryProducts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(categoryProducts.length / recordsPerPage)
    return (
        <div className={classes.catalog_main__layout}>
            <CatalogAside change={changeCategory}/>
            <ProductCatalog
                currentRecords={currentRecords}
                loading={loading}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Catalog;