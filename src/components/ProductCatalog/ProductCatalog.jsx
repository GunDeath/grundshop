import React, {useState, useEffect} from 'react';
import classes from "./ProductCatalog.module.css";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {getDefaultProducts} from "../../customFunctions";
import {useActions} from "../../store/hooks/useActions";

const ProductCatalog = () => {
    const params = useParams()
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const {goodsList, singleCategory, categories} = useTypedSelector(state => state)
    const {singleCategoryAddItem} = useActions();
    /*change product layout*/
    const [grid, setGrid] = useState(true)
    const changeGrid = (value) => { setGrid(value) }

    useEffect(() => {
        const newCategory = categories.filter(cat => cat.slug === params.category_slug)
        singleCategoryAddItem(...newCategory)
    }, [params.category_slug])

    useEffect(() => {
        localStorage.setItem('singleCategory', JSON.stringify(singleCategory))
        setLoading(true)
        if (Array.isArray(singleCategory) && singleCategory.length !== 0) {
            if(Array.isArray(goodsList) && goodsList.length){
                setProductsByCategory(goodsList.filter(product => product.categories[0].slug === singleCategory[0].slug))
                setLoading(false)
            }
            else{ getDefaultProducts(setProductsByCategory, setLoading, singleCategory[0].id) }
        }else{ getDefaultProducts(setProductsByCategory, setLoading, 16) }
    }, [singleCategory])

    const currentRecords = productsByCategory.slice(indexOfFirstRecord, indexOfLastRecord).sort((a, b) => a.name.localeCompare(b.name));
    const nPages = Math.ceil(productsByCategory.length / recordsPerPage)

    return (
        <div className={classes.catalogMainContent}>
            <CatalogTopMenu changeGrid={changeGrid} grid={grid}/>
            <CatalogItemsLoop
                grid={grid}
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