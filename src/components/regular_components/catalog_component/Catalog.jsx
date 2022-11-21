import React, {useState, useEffect} from 'react';
import classes from './MyCatalog.module.css'
import {api} from "../../../woocommerce_api";
import ProductCatalog from "../../catalog_of_products/ProductCatalog";
import {Audio} from "react-loader-spinner";


const Catalog = () => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categoryID, setCategoryID] = useState('16')
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(()=>{
        axiosProducts(categoryID);
    }, [categoryID])

    let axiosProducts = (id) => {
        api
            .get(`products?category=${id}`)
            .then((response) => {
                if(response.status === 200){
                    setCategoryProducts(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {});
    }

    function add(id){
        setCategoryID(id)
    }

    const currentRecords = categoryProducts.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(categoryProducts.length / recordsPerPage)

    return (
        <div className={classes.catalog_main__layout}>
            <aside className={classes.aside_catalog__block}>
                <button onClick={() => add('17')}>
                    Дренажные
                </button>
                <button onClick={() => add('16')}>
                    Циркуляционные
                </button>
            </aside>
            {loading ?
                <div className={classes.loader_styles}>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="#003767"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                </div>
                :
                <ProductCatalog
                    currentRecords={currentRecords}
                    loading={loading}
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            }

        </div>
    );
};

export default Catalog;