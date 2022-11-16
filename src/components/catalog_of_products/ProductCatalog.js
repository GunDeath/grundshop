import React from 'react';
import ProductCart from "../single_components/loop_product_cart/ProductCart";
import Pagination from "../pagination/Pagination";
import classes from './MyProductCatalog.module.css'

const ProductCatalog = ({currentRecords, loading, nPages, currentPage, setCurrentPage}) => {
    return (
        <section className={classes.catalog_main__section}>
            {currentRecords.map(product => <ProductCart key={product.id} product={product} />)}
            {loading ? '' : <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </section>
    );
};

export default ProductCatalog;