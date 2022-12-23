import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import MyPriceFilter from "./MyPriceFilter/MyPriceFilter";

const MyFilters = ({filterProductsList}) => {
    const {attributeProducts} = useTypedSelector(state => state)
    const [attributesListAll, setAttributeListAll] = useState([])
    const [attributeList, setAttributeList] = useState([])

    const attributeCount = (attributesListAll) => {
        if (attributesListAll.length !== 0) {
            attributesListAll.map(item =>
                item.map(subItem => {
                        let newObj = {name: subItem.name, option: subItem.options.join(' ')}
                        setAttributeList(oldArray => [...oldArray, newObj])
                    }
                )
            )
        }
    }

    useEffect(() => {
        if (filterProductsList.length !== 0) {
            filterProductsList.map(item => {
                setAttributeListAll(prev => [...prev, item.attributes])
            })
        }
    }, [filterProductsList])

    useEffect(() => {
        attributeCount(attributesListAll)
    }, [attributesListAll])
    useEffect(() => {
        let uniqueNameAndCount = {}
        let uniqueOptionAndCount = []
        attributeList.map(el => { uniqueNameAndCount[el.name] = (uniqueNameAndCount[el.name] || 0) + 1 })
        uniqueOptionAndCount.push(...[...new Set(attributeList.map(item => item.option))])
    }, [attributeList])

    return (
        <div>
            <MyPriceFilter filterProductsList={filterProductsList}/>
            {
                attributeProducts.length !== 0
                    ? (
                        attributeProducts.map(attrFilter => (
                                <>
                                    <div key={Math.random()}>{attrFilter.name}</div>
                                    {
                                        attrFilter.option.map(singleOption => (
                                            <div key={Math.random()}>{singleOption.name}</div>
                                        ))
                                    }
                                </>
                            )
                        )
                    ) : (
                        <></>
                    )
            }
        </div>
    );
};

export default MyFilters;