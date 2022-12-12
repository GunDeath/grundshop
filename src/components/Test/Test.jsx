import React, {useEffect, useState} from 'react';
import {api} from "../../woocommerce_api";
import MyCatalogBanner from "../UIUX/NEW_UI/MyBlocks/MyCatalogBanner/MyCatalogBanner";

const Test = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const getCountries = () => {
        api.get('products?status=publish')
            .then((response) => {
                setCountries(response.data)
                setLoading(!loading)
            })
    }

    const [value, setValue] = useState('')
    const filteredCountries = countries.filter(country => {
        if(country.name.toLowerCase().includes(value.toLowerCase())){
            return country.name.toLowerCase().includes(value.toLowerCase())
        }else if(country.sku.toLowerCase().includes(value.toLowerCase())){
            return country.name.toLowerCase()
        }else if(country.slug.toLowerCase().includes(value.toLowerCase())){
            return country.name.toLowerCase()
        }

    })

    // useEffect(()=>{
    //     const config = {
    //         auth: {
    //             username: 'ck_cefbcaa40e47276dc6064169c20751350a5365d3',
    //             password: 'cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2'
    //         }
    //     }
    //
    //     const apiData = async () => {
    //         await axios.get('https://mybackend.rusgetter.store/wp-json/wc/v3/products', config)
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //     }
    //     apiData()
    // }, [])

    return (
        <div>
            {/*<form>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder='Search'*/}
            {/*        onChange={(event) => setValue(event.target.value)}*/}
            {/*    />*/}
            {/*</form>*/}
            {/*{*/}
            {/*    loading*/}
            {/*        ? <div>loading...</div>*/}
            {/*        : (*/}
            {/*            filteredCountries.map((country, index) => {*/}
            {/*                return (*/}
            {/*                    <div key={index}>{country.name}</div>*/}
            {/*                )*/}
            {/*            })*/}
            {/*        )*/}
            {/*}*/}
            <MyCatalogBanner />
        </div>
    );
};

export default Test;