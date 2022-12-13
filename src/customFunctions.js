/*get sub category*/
import {api, consumerKey, consumerSecret} from "./woocommerce_api";
import axios from "axios";

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

export const getDefaultProducts = (setProductsByCategory, setLoading, categoryId) => {
    api.get(`products?category=${categoryId}&orderby=title`)
        .then((response) => {
            if (response.status === 200) {
                setProductsByCategory(response.data)
                setLoading(false)
            }
        })
        .catch((error) => {
        })
}

const data = { auth: { "Content-Type": "application/json",  "username": consumerKey,  "password": consumerSecret } }
export const addProductReviews = async (updateObject) => {
    await axios.post(`https://mybackend.rusgetter.store/wp-json/wc/v3/products/reviews`, updateObject, data)
        .then((response) => console.log(response.data))
}

