import React, {useState} from 'react';
import {api} from "../../woocommerce_api";
import axios from "axios";
import classes from './Test.module.css'
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import search_icon from "../../assets/icons/header_icons/main-header__search-icon.svg";


const Test = () => {


        // const config = {
        //     auth: {
        //         username: 'ck_cefbcaa40e47276dc6064169c20751350a5365d3',
        //         password: 'cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2'
        //     }
        // }
        //
        // const apiData = async () => {
        //     await axios.get(`https://mybackend.rusgetter.store/wp-json/wc/v3/products?search=${value}`, config)
        //         .then((response) => {
        //             console.log(response.data);
        //         })
        // }

    return (
        <div >
            {/*<div className={classes.header_main__search_form}>*/}
            {/*    <input*/}
            {/*        value={value}*/}
            {/*        onChange={(event) => setValue(event.target.value)}*/}
            {/*        type="text"*/}
            {/*        className={classes.header_main__search_input}*/}
            {/*        placeholder="Поиск по сайту"*/}
            {/*    />*/}
            {/*    <button className={classes.search_form__button} onClick={()=>console.log('hello')}>*/}
            {/*        <img src={search_icon} alt="" className="search_button" />*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*{*/}
            {/*    value !== ''*/}
            {/*        ?(*/}
            {/*            <div className={classes.searchArea}>*/}
            {/*                {*/}
            {/*                    filteredCountries.length !== 0 ? (*/}
            {/*                        filteredCountries.map((country, index) => {*/}
            {/*                            return (*/}
            {/*                                <div key={index} className={classes.searchAnswer}>*/}
            {/*                                    <div className={classes.searchName}>*/}
            {/*                                        {country.name}*/}
            {/*                                            </div>*/}
            {/*                                            <div className={classes.searchPrice}>*/}
            {/*                                        {country.price} руб.*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                )*/}
            {/*                        })):(*/}
            {/*                            console.log('empty')*/}
            {/*                        )*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*        :(<></>)*/}
            {/*}*/}
        </div>
    );
};

export default Test;