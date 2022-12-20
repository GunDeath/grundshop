import React, {useState, useEffect} from 'react';
import classes from './CompareLayout.module.css'
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import MyBreadCrumbs from "../../../components/UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/PopularGoods/PopularGoods";
import ComparePage from "../../../components/regular_components/ComparePage/ComparePage";
import MyCompareAttributesBlock
    from "../../../components/UIUX/NEW_UI/MyBlocks/MyCompareAttributesBlock/MyCompareAttributesBlock";
import MyProductsCompareAttributes
    from "../../../components/UIUX/NEW_UI/MyBlocks/MyCompareAttributesBlock/MyProductsCompareAttributes/MyProductsCompareAttributes";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import {useActions} from "../../../store/hooks/useActions";

const CompareLayout = () => {
    const [sliderCounter, setSliderCounter] = useState(0)
    const {compare} = useTypedSelector(state => state)
    const [subarray, setSubarray] = useState([])
    const {addAttributes} = useActions()

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    useEffect(() => {
        if(compare.length !== 0){
            compare.map(item => addAttributes([...item.attributes]))
            setSubarray(sliceIntoChunks(compare, 2))
        }
    }, [compare])

    useEffect(()=>{
        if(subarray.length % 2 !== 0){
            const preLast = [];
            preLast.push(...subarray.slice(-2, -1))
            subarray[subarray.length - 1].unshift(preLast[0][1])
        }
    }, [subarray])

    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Сравнение </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <CatalogAside/>
                    <div className={classes.contentSection}>
                        <MyBreadCrumbs url='/compare' title='Сравнение'/>
                        <ComparePage />
                    </div>
                </div>
            </div>
            <MyCompareAttributesBlock setSliderCounter={setSliderCounter} sliderCounter={sliderCounter} subarray={subarray}/>
            <MyProductsCompareAttributes sliderCounter={sliderCounter} subarray={subarray}/>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CompareLayout;