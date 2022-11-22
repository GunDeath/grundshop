import React, {useState} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import {categoriesList} from "../../dataArrays";

const CatalogAside = ({change}) => {
    const [active, setActive] = useState(2)
    const changeActive = (newActive) => {setActive(newActive)}
    return (
        <div className={classes.main_container}>
            <div>
                <MyLowTitle>Категории</MyLowTitle>
            </div>
            <ul className={classes.list_link}>
                {categoriesList.map(category =>
                    <li
                        onClick={()=>{
                            change(category.catId)
                            changeActive(category.id)
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
    );
};

export default CatalogAside;