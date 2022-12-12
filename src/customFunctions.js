/*get sub category*/
import {api, consumerKey, consumerSecret, oldBaseUrl} from "./woocommerce_api";
import axios from "axios";
import {useState} from "react";

const data = {
    auth: {
        "Content-Type": "application/json",
        "username": "ck_cefbcaa40e47276dc6064169c20751350a5365d3",
        "password": "cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2"
    }
}
/*get sub category*/
export const subCategoryFunction = (id, setCategory) => {
    api.get(`products/categories?parent=${id}`)
        .then(response => {
            if (response.status === 200) {
                setCategory(response.data)
            }
        })
        .catch(error => {
        })
}
/*get single category*/
export const singleCategory = (categoryID, setProductsByCategory, setLoading) => {
    api
        .get(`products?category=${categoryID}`)
        .then((response) => {
            if (response.status === 200) {
                setProductsByCategory(response.data)
                setLoading(false)
            }
        })
        .catch((error) => {
        });
}




export const addProductReviews = async (updateObject) => {
    const data = {
        auth: {
            "Content-Type": "application/json",
            "username": consumerKey,
            "password": consumerSecret
        }
    }
    await axios.post(`https://mybackend.rusgetter.store/wp-json/wc/v3/products/reviews`, updateObject, data)
        .then((response) => console.log(response.data))
}

