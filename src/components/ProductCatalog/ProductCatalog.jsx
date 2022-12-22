import React, {useState, useEffect} from 'react';
import classes from "./ProductCatalog.module.css";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import {useSortingProductInCatalog} from "../../customHooks";

const ProductCatalog = () => {
    const params = useParams()
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    /*create products array*/
    const {goodsList, singleCategory, categories, productFilterList} = useTypedSelector(state => state)
    const {singleCategoryAddItem} = useActions();
    /*change product layout*/
    const [grid, setGrid] = useState(true)
    const changeGrid = (value) => { setGrid(value) }
    /*sorting element in catalog*/
    const [selectedSort, setSelectedSort] = useState('nameTop')

    useEffect(() => {
        const newCategory = categories.filter(cat => cat.slug === params.category_slug)
        newCategory.length !== 0 ? singleCategoryAddItem(...newCategory) : singleCategoryAddItem(categories[categories.length - 1])
    }, [params.category_slug, categories])

    useEffect(()=>{
        if(singleCategory.length !== 0 ){
            localStorage.setItem('singleCategory', JSON.stringify(singleCategory))
        }
        setLoading(true)
        if (Array.isArray(singleCategory) && singleCategory.length !== 0 && singleCategory[0] !== undefined) {
            if(Array.isArray(goodsList) && goodsList.length !==0 ){
                setProductsByCategory(goodsList.filter(product => product.categories[0].slug === singleCategory[0].slug))
                setLoading(false)
            }
        }
    }, [singleCategory, goodsList])

    const sorting = useSortingProductInCatalog(productFilterList, selectedSort)

    const currentRecords = sorting.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(productsByCategory.length / recordsPerPage)

    return (
        <div className={classes.catalogMainContent}>
            <CatalogTopMenu selectedSort={selectedSort} setSelectedSort={setSelectedSort} changeGrid={changeGrid} grid={grid}/>
            <CatalogItemsLoop  grid={grid}  currentRecords={currentRecords}  loading={loading}  nPages={nPages}  currentPage={currentPage}  setCurrentPage={setCurrentPage} />
        </div>
    );
};



export default ProductCatalog;

