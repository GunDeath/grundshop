import React, {useEffect, useState} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import MyTitleFilter from "../UIUX/titles/MyTitleFilter/MyTitleFilter";
import MyRegularText from "../UIUX/Text/MyRegularText";
import CatalogFalseAside from "./CatalogFalseAside/CatalogFalseAside";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import MyFilters from "../UIUX/NEW_UI/MyFilters/MyFilters";

const CatalogAside = ({isCatalog}) => {
    const [filterProducts, setFilterProducts] = useState([])
    const {singleCategory, goodsList} = useTypedSelector(state => state)
    const {addFilterProductsToList} = useActions();

    useEffect(()=>{
        if (Array.isArray(singleCategory) && singleCategory.length !== 0 && singleCategory[0] !== undefined) {
            if(Array.isArray(goodsList) && goodsList.length !==0 ){
                addFilterProductsToList(goodsList.filter(product => product.categories[0].slug === singleCategory[0].slug))
                setFilterProducts(goodsList.filter(product => product.categories[0].slug === singleCategory[0].slug))
            }
        }
    }, [singleCategory, goodsList])

    return (
        <div className={classes.main_container}>
            {
                isCatalog
                    ? (
                        <div className={classes.filterSection}>
                            <MyTitleFilter>Фильтр</MyTitleFilter>
                            <MyRegularText>Очистить все</MyRegularText>
                        </div>
                    )
                    : <></>
            }
            <div className={isCatalog ? classes.categorySection : ''}>
                <MyLowTitle>Категории</MyLowTitle>
                <ul className={classes.list_link}> { <CatalogFalseAside /> } </ul>
            </div>
            {
                isCatalog
                    ? (
                        <MyFilters filterProductsList={filterProducts} />
                    )
                    : <></>
            }
        </div>
    );
};

export default CatalogAside;