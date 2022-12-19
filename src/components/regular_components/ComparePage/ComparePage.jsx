import React from 'react';
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import MyEmptyComponent from "../../UIUX/NEW_UI/MyBlocks/MyEmptyComponent/MyEmptyComponent";
import FullCompareList from "./FullCompareList/FullCompareList";

const ComparePage = () => {
    const {compare} = useTypedSelector(state => state)
    return (
        <> { compare.length !== 0 ? <FullCompareList /> : <MyEmptyComponent pageTitle='Список сравнения пуст' />} </>
    );
};

export default ComparePage;