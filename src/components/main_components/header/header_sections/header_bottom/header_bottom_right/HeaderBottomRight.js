import React from 'react';
import classes from './MyHeaderBottomRight.module.css'
import {Link} from "react-router-dom";

const HeaderBottomRight = () => {
    const element_array = [
        {id: 1, text: 'Комплектующие', link: '/catalog/24'},
        {id: 2, text: 'Калькулятор подбора насоса', link: '/error'},
        {id: 3, text: 'Осторожно!', link: '/error'},
    ]
    return (
        <div className={classes.bottom_header__right_section}>
            {element_array.map(element => {
                return(
                    <Link to={element.link} className={classes.bottom_header__right_elements} key={element.id}>
                        {element.text}
                    </Link>
                )
            })}
        </div>
    );
};

export default HeaderBottomRight;