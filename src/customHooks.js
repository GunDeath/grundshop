import {useState, useEffect} from "react";
import {api} from "./woocommerce_api";

/*get list of product categories*/
export const useCategories = () => {
    const [mainCategory, setMainCategory] = useState([]);
    useEffect(() => {
        getCategoryAxios();
    }, [])
    let getCategoryAxios = () => {
        api
            .get('products/categories?include=16,17,19,20,23,26')
            .then((response) => {if(response.status === 200){setMainCategory(response.data)}})
            .catch((error) => {});
    }
    return mainCategory;
}
/*get popular goods list*/
export const usePopularGoods = () => {
    const [popularGoods, setPopularGoods] = useState([]);
    useEffect(()=>{
        getPopularGoods();
    }, [])
    let getPopularGoods = () => {
        api.get('products?orderby=popularity&order=desc&per_page=10')
            .then(response => {if(response.status === 200){setPopularGoods(response.data)}})
            .catch(error => {})
    }
    return popularGoods;
}
/*get new goods list*/
export const useNewGoods = () => {
    const [newGoods, setNewGoods] = useState([]);
    useEffect(()=>{
        getNewGoods();
    }, [])
    let getNewGoods = () => {
        api.get('products?orderby=date&order=desc&per_page=10')
            .then(response => {if(response.status === 200){setNewGoods(response.data)}})
            .catch(error => {})
    }
    return newGoods;
}
