import React, {useState} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import {categoriesList} from "../../dataArrays";
import MyTitleFilter from "../UIUX/titles/MyTitleFilter/MyTitleFilter";
import MyRegularText from "../UIUX/Text/MyRegularText";

const CatalogAside = (props) => {
    const [active, setActive] = useState(2)
    const changeActive = (newActive) => {setActive(newActive)}
    return (
        <div className={classes.main_container}>
            <div className={classes.filterSection}>
                <MyTitleFilter>Фильтр</MyTitleFilter>
                <MyRegularText>Очистить все</MyRegularText>
            </div>
            <div className={classes.categorySection}>
                <MyLowTitle>Категории</MyLowTitle>
                <ul className={classes.list_link}>
                    {categoriesList.map(category =>
                        <li
                            onClick={()=>{
                                props.change(category.catId)
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
                            {category.title}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CatalogAside;