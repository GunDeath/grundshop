import {useState, useEffect, useMemo} from "react";
import {api} from "./woocommerce_api";
import {useActions} from "./store/hooks/useActions";
import {useTypedSelector} from "./store/hooks/useTypedSelector";

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
    const {categoryAddItem, singleCategoryAddItem} = useActions()
    const {singleCategory} = useTypedSelector(state => state)
    useEffect(()=>{
        getCategories();
    }, [])
    const getCategories = () => {
         api.get('products/categories?per_page=100&orderby=name')
            .then((response) => { if(response.status === 200){
                categoryAddItem(response.data)
                localStorage.setItem('categories', JSON.stringify(response.data))
                if(singleCategory.length === 0){
                    singleCategoryAddItem(...response.data.filter(cat => cat.acf.default_catalog_category === true))
                    localStorage.setItem('singleCategory', JSON.stringify(response.data.filter(cat => cat.acf.default_catalog_category === true)))
                }
            } })
            .catch((error) => {})
    }
}

/*get all products*/
export const usePublishedGoods = () => {
    const {addProducts} = useActions()
    useEffect(()=>{
        console.log('start')
        getGoods();
    }, [])
    const getGoods = () => {
        api.get('products?status=publish')
            .then((response) => { if(response.status === 200){
                addProducts(response.data)
                localStorage.setItem('goods', JSON.stringify(response.data))
            } })
            .catch((error) => {})
    }
}

export const useSortingProductInCatalog = (productsByCategory, selectedSort) =>{
    return useMemo(() => {
        switch (selectedSort) {
            case 'nameTop':
                return [...productsByCategory].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                break;
            case 'nameBottom':
                return [...productsByCategory].sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0));
                break;
            case 'priceTop':
                return [...productsByCategory].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'priceBottom':
                return [...productsByCategory].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
        }
    }, [productsByCategory, selectedSort]);
}

export const useAttributes = () => {
    const [localState, setLocalState] = useState([])
    const [attributeTerms, setAttributeTerms] = useState([])
    const {addAttributeProductsList} = useActions()
    useEffect(()=>{ getAttributes(); }, [])

    const getAttributes = () => {
        api.get('products/attributes/')
            .then((response) => { if(response.status === 200){
                response.data.map(item => {
                    setLocalState(prev => [...prev, {id: item.id, name: item.name, slug: item.slug}])
                })
            } })
            .catch((error) => {})
    }

    useEffect(() => {
            getAttributeTerms(localState)
    }, [localState])

    const getAttributeTerms = (localState) => {

        localState.map(singleAttr => {
            api.get(`products/attributes/${singleAttr.id}/terms`)
                .then((response) => { if(response.status === 200){
                    setAttributeTerms(prev => [...prev, {...singleAttr, option: response.data}])
                } })
                .catch((error) => {})
        })
    }

    useEffect(()=>{
        addAttributeProductsList(attributeTerms)
    }, [attributeTerms])
}