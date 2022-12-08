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
            .then((response) => {
                if (response.status === 200) {
                    setMainCategory(response.data)
                }
            })
            .catch((error) => {
            });
    }
    return mainCategory;
}
/*get popular goods list*/
export const usePopularGoods = () => {
    const [popularGoods, setPopularGoods] = useState([]);
    useEffect(() => {
        getPopularGoods();
    }, [])
    let getPopularGoods = () => {
        api.get('products?orderby=popularity&order=desc&per_page=10')
            .then(response => {
                if (response.status === 200) {
                    setPopularGoods(response.data)
                }
            })
            .catch(error => {
            })
    }
    return popularGoods;
}
/*get new goods list*/
export const useNewGoods = () => {
    const [newGoods, setNewGoods] = useState([]);
    useEffect(() => {
        getNewGoods();
    }, [])
    let getNewGoods = () => {
        api.get('products?orderby=date&order=desc&per_page=10')
            .then(response => {
                if (response.status === 200) {
                    setNewGoods(response.data)
                }
            })
            .catch(error => {
            })
    }
    return newGoods;
}
/*get all published categories*/
export const usePublishedCategories = () => {
    const [timedStore, setTimedStore] = useState([])
    useEffect(()=>{
        getCategories();
    }, [])
    const getCategories = async () => {
        await api.get('products/categories?per_page=100&parent=0&orderby=name')
            .then((response) => { if(response.status === 200){ setTimedStore(response.data) } })
            .catch((error) => {})
    }
    return timedStore;
}

/*get all products*/
export const usePublishedGoods = () => {
    const [goods, setGoods] = useState([])
    useEffect(()=>{
        getGoods();
    }, [])
    const getGoods = async () => {
        await api.get('products?status=publish')
            .then((response) => { if(response.status === 200){ setGoods(response.data) } })
            .catch((error) => {})
    }
    return goods;
}