import React from 'react';
import classes from './MyHeaderBottomRight.module.css'

const HeaderBottomRight = () => {
    const element_array = [
        {id: 1, text: 'Комплектующие'},
        {id: 2, text: 'Калькулятор подбора насоса'},
        {id: 3, text: 'Осторожно!'},
    ]
    return (
        <div className={classes.bottom_header__right_section}>
            {element_array.map(element => {
                return(
                    <p className={classes.bottom_header__right_elements} key={element.id}>
                        {element.text}
                    </p>
                )
            })}
        </div>
    );
};

export default HeaderBottomRight;