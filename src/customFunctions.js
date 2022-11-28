/*get sub category*/
import {api} from "./woocommerce_api";
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
            if(response.status === 200){
                setProductsByCategory(response.data)
                setLoading(false)
            }
        })
        .catch((error) => {});
}