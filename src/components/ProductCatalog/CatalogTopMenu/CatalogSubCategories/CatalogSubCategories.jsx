import React, {useEffect} from 'react';
import classes from "./CatalogSubCategories.module.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {api} from "../../../../woocommerce_api";
import {useActions} from "../../../../store/hooks/useActions";

const CatalogSubCategories = () => {
    const {singleCategory, subCategories} = useTypedSelector(state => state);
    const {subCategoryAddItem} = useActions()

    useEffect(() => {
        if (singleCategory.length !== 0) {
            api.get(`products/categories?parent=${singleCategory[0].id}`)
                .then(response => { if (response.status === 200) { subCategoryAddItem(response.data) } })
                .catch(error => console.log(error.message))
        }
    }, [singleCategory]);

    useEffect(() => { localStorage.setItem('subCategories', JSON.stringify(subCategories)) }, [subCategories])

    return (
        <div className={subCategories.length !== 0 ? classes.mb : ''}>
            <ul className={classes.catalogMainTopMenu}>
                {
                    subCategories.length !== 0
                        ?
                        subCategories.map(category =>
                            Number(category.parent) === Number(singleCategory[0].id) ? (
                                <li key={Math.random()}>
                                    <Link to={`/catalog/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </li> ) : ( <></> )
                        )  :  <React.Fragment key={Math.random()}/>
                }
            </ul>
        </div>
    );
};

export default CatalogSubCategories;