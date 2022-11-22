import React from 'react';
import classes from './FooterRight.module.css'
import {Link} from "react-router-dom";

const FooterRight = () => {
    return (
        <div className={classes.right_footer}>
            <div className={classes.right_footer_links}>
                <div className={classes.lists_sections}>
                    <div className={classes.list_title}>Информация</div>
                    <div className={classes.link_list_block}>
                        <Link className={classes.list_link_element}>Циркуляционные насосы</Link>
                        <Link className={classes.list_link_element}>Насосы для воды</Link>
                        <Link className={classes.list_link_element}>Фекальные насосы</Link>
                        <Link className={classes.list_link_element}>Дренажные насосы</Link>
                        <Link className={classes.list_link_element}>Насосные станции</Link>
                        <Link className={classes.list_link_element}>Центробежные насосы</Link>
                    </div>
                </div>
                <div className={classes.lists_sections}>
                    <div className={classes.list_title}>Пользователю</div>
                    <div className={classes.link_list_block}>
                        <Link to='/dostavka' className={classes.list_link_element}>Доставка</Link>
                        <Link className={classes.list_link_element}>Оплата</Link>
                        <Link className={classes.list_link_element}>Документация</Link>
                        <Link className={classes.list_link_element}>Осторожно</Link>
                        <Link className={classes.list_link_element}>Контакты</Link>
                    </div>
                </div>
            </div>
            <div className={classes.polisy}>
                Политика конфиденциальности
            </div>
        </div>
    );
};

export default FooterRight;