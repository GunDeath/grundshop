import React, {useState} from 'react';
import classes from './MyHeaderMainSearch.module.css'
import search_icon from '../../../../../../assets/icons/header_icons/main-header__search-icon.svg'
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";

const HeaderMainSearch = () => {
    const {goodsList} = useTypedSelector(state => state)

    const [value, setValue] = useState('')
    const filteredCountries = goodsList.filter(goodsList => {
        if(goodsList.name.toLowerCase().includes(value.toLowerCase())){
            return goodsList.name.toLowerCase().includes(value.toLowerCase())
        }else if(goodsList.sku.toLowerCase().includes(value.toLowerCase())){
            return goodsList.name.toLowerCase()
        }else if(goodsList.slug.toLowerCase().includes(value.toLowerCase())){
            return goodsList.name.toLowerCase()
        }
    })

    return (
        <div className={classes.mainSearch}>
            <div className={classes.header_main__search_form}>
                <input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    type="text"
                    className={classes.header_main__search_input}
                    placeholder="Поиск по сайту"
                />
                <button className={classes.search_form__button} onClick={() => console.log('hello')}>
                    <img src={search_icon} alt="" className="search_button"/>
                </button>
            </div>
            {
                value !== ''
                    ? (
                        <div className={classes.searchArea}>
                            {
                                filteredCountries.length !== 0 ? (
                                    filteredCountries.map((country, index) => {
                                        return (
                                            <div key={index} className={classes.searchAnswer}>
                                                <div className={classes.searchName}>
                                                    {country.name}
                                                </div>
                                                <div className={classes.searchPrice}>
                                                    {Math.round(country.price)} руб.
                                                </div>
                                            </div>
                                        )
                                    })) : (
                                    console.log('empty')
                                )
                            }
                        </div>
                    )
                    : (<></>)
            }
        </div>
    );
};

export default HeaderMainSearch;