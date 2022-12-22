import React, {useEffect, useState} from 'react';
import {useActions} from "../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import MyPriceFilter from "./MyPriceFilter/MyPriceFilter";

const MyFilters = ({filterProductsList}) => {
    const {attributesReducer} = useTypedSelector(state => state)
    const [attributesListAll, setAttributeListAll] = useState([])
    const [attributeList, setAttributeList] = useState([])
    const {addAttributes} = useActions()

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
                addAttributes([...item.attributes])
                setAttributeListAll(prev => [...prev, item.attributes])
            })
        }
    }, [filterProductsList])

    useEffect(() => {
        attributeCount(attributesListAll)
    }, [attributesListAll])
    useEffect(() => {
        let uniqueNameAndCount = {}
        attributeList.map(el => { uniqueNameAndCount[el.name] = (uniqueNameAndCount[el.name] || 0) + 1 })
        console.log(uniqueNameAndCount)
        console.log([...new Set(attributeList.map(item => item.option))])
    }, [attributeList])

    return (
        <div>
            <MyPriceFilter filterProductsList={filterProductsList}/>
            {
                attributesReducer.length !== 0
                    ? (
                        attributesReducer.map(attrFilter =>
                            <div key={attrFilter.name}>{attrFilter.name}</div>
                        )
                    ) : (
                        <></>
                    )
            }
        </div>
    );
};

export default MyFilters;