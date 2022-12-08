import React, {useState} from 'react';
import classes from './CatalogAside.module.css'
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import MyTitleFilter from "../UIUX/titles/MyTitleFilter/MyTitleFilter";
import MyRegularText from "../UIUX/Text/MyRegularText";
import CatalogFalseAside from "./CatalogFalseAside/CatalogFalseAside";

const CatalogAside = ({isCatalog, catalogLoader, loading}) => {
    const [active, setActive] = useState(2)
    const changeActive = (newActive) => {setActive(newActive)}

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
                        <CatalogFalseAside setActive={setActive} changeActive={changeActive} active={active} catalogLoader={catalogLoader} loading={loading}/>
                    }
                </ul>
            </div>
        </div>
    );
};

export default CatalogAside;