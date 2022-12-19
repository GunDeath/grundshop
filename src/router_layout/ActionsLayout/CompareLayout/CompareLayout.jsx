import React from 'react';
import classes from './CompareLayout.module.css'
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import MyBreadCrumbs from "../../../components/UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/PopularGoods/PopularGoods";
import ComparePage from "../../../components/regular_components/ComparePage/ComparePage";
import MyCompareAttributesBlock
    from "../../../components/UIUX/NEW_UI/MyBlocks/MyCompareAttributesBlock/MyCompareAttributesBlock";

const CompareLayout = () => {
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
            <MyCompareAttributesBlock />
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CompareLayout;