import {useState, useEffect} from "react";
import {api} from "./woocommerce_api";

export const useCategories = () => {
    const [mainCategory, setMainCategory] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategoryAxios();
    }, [])

    let getCategoryAxios = () => {

        api
            .get('products/categories?include=16,17,19,20,23,26')
            .then((response) => {
                if(response.status === 200){
                    setMainCategory(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {});
    }
    return mainCategory;
}


export const usePopularGoods = () => {
    const [popularGoods, setPopularGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getPopularGoods();
    }, [])

    let getPopularGoods = () => {
        api.get('products?orderby=popularity&order=desc&per_page=10')
            .then(response => {
                if(response.status === 200)
                    setPopularGoods(response.data);
                    setLoading(false)
            })
            .catch(error => {})
    }
    return popularGoods;
}