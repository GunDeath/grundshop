import React, {useState, useEffect} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import {categoriesList} from "../../dataArrays";
import MyTitleFilter from "../UIUX/titles/MyTitleFilter/MyTitleFilter";
import MyRegularText from "../UIUX/Text/MyRegularText";
import {api} from "../../woocommerce_api";

const CatalogAside = (props) => {
    const [categoryList, setCategoryList] = useState([categoriesList])
    const [active, setActive] = useState(2)
    const [loading, setLoading] = useState(true)
    const changeActive = (newActive) => {setActive(newActive)}

    useEffect(()=>{
        api
            .get(`products/categories?parent=0`)
            .then((response) => {
                if(response.status === 200){
                    setCategoryList(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {});
    }, [])

    return (
        <div className={classes.main_container}>
            <div className={classes.filterSection}>
                <MyTitleFilter>Фильтр</MyTitleFilter>
                <MyRegularText>Очистить все</MyRegularText>
            </div>
            <div className={classes.categorySection}>
                <MyLowTitle>Категории</MyLowTitle>
                <ul className={classes.list_link}>
                    {categoryList.map(category =>
                        <li
                            onClick={()=>{
                                props.change(category.id)
                                changeActive(category.id)
                                props.setLoading(true)
                            }}
                            key={category.id}
                            className={
                                category.id === active
                                    ? classes.active_link
                                    : classes.link
                            }
                        >
                            {category.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CatalogAside;