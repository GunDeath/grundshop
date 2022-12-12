import React, {useState, useEffect} from 'react';
import {api} from "../../woocommerce_api";
import classes from "./ProductCatalog.module.css";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import {addProductReviews, subCategoryFunction} from "../../customFunctions";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";
import {useLocation, useParams} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";

const ProductCatalog = () => {
    const params = useParams()
    const location = useLocation();
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categoryID, setCategoryID] = useState(params.slug || 'cirkulyacionnye')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [subCategory, setSubCategory] = useState([])
    const [recordsPerPage] = useState(9)
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const {goodsList} = useTypedSelector(state => state)
    /*change product layout*/
    const [grid, setGrid] = useState(true)
    const changeGrid = (value) => {
        setGrid(value)
    }

    useEffect(() => { setCategoryID(params.category_slug) }, [params.category_slug])

    useEffect(() => {
        setLoading(true)
        if (categoryID !== undefined) {
            if(Array.isArray(goodsList) && goodsList.length){
                setProductsByCategory(goodsList.filter(product => product.categories[0].slug === categoryID))
                setLoading(false)
            }
            else{
                api.get(`products?categories=${categoryID}&orderby=title`)
                    .then((response) => {
                        if (response.status === 200) {
                            setProductsByCategory(response.data)
                            setLoading(false)
                        }
                    })
                    .catch((error) => {
                    })
            }
            if(location.state !== null){
                const {category} = location.state
                subCategoryFunction(category.id, setSubCategory);
            }
        }else{
            setCategoryID('cirkulyacionnye')
        }
    }, [categoryID])

    const currentRecords = productsByCategory.slice(indexOfFirstRecord, indexOfLastRecord).sort((a, b) => a.name.localeCompare(b.name));
    const nPages = Math.ceil(productsByCategory.length / recordsPerPage)

    return (
        <div className={classes.catalogMainContent}>
            <CatalogTopMenu changeGrid={changeGrid} grid={grid} subCategory={subCategory}/>
            <CatalogItemsLoop
                grid={grid}
                currentRecords={currentRecords}
                loading={loading}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                categoryID={categoryID}
            />
        </div>
    );
};

export default ProductCatalog;