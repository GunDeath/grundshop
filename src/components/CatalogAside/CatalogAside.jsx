import React, {useState, useEffect} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import {categoriesList} from "../../dataArrays";
import MyTitleFilter from "../UIUX/titles/MyTitleFilter/MyTitleFilter";
import MyRegularText from "../UIUX/Text/MyRegularText";
import {api} from "../../woocommerce_api";
import CatalogFalseAside from "./CatalogFalseAside/CatalogFalseAside";

const CatalogAside = ({isCatalog, catalogLoader, loading}) => {
    const [categoryList, setCategoryList] = useState(categoriesList )
    const [active, setActive] = useState(2)
    const changeActive = (newActive) => {setActive(newActive)}

    useEffect(()=>{
        api.get('products/categories?parent=0')
           .then((response) => {
                if(response.status === 200){
                    setCategoryList(response.data)
                }
           })
           .catch((error) => {});
    }, [])

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
                <ul className={classes.list_link}>
                    {
                        <CatalogFalseAside setActive={setActive} categoryList={categoryList} changeActive={changeActive} active={active} catalogLoader={catalogLoader} loading={loading}/>
                    }
                </ul>
            </div>
        </div>
    );
};

export default CatalogAside;