import React from 'react';
import classes from './TabsContent.module.css'
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import RegularText from "../../../UIUX/body/RegularText";
import DocumentationTab from "../DocumentationTab/DocumentationTab";

const TabsContent = ({tabsFlag, product}) => {
    // console.log(product.acf.doc_file)
    return (
        <div className={classes.contentTabs}>
            {
                tabsFlag
                    ? product.description
                        ? <DescriptionBlock product_description={product.description}/>
                        : <p>Описание отсутствует</p>
                    : product.acf.doc_file !== null
                        ? <DocumentationTab doc_file={product.acf.doc_file} />
                        : <RegularText>Документации к данному товару не обнаружено!</RegularText>
            }
        </div>
    );
};

export default TabsContent;