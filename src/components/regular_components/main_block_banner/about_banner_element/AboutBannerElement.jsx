import React from 'react';
import classes from './AboutBannerElement.module.css'

const AboutBannerElement = (props) => {
    return (
        <div
            className={
                props.cell[0].id === props.banner.id
                    ? `${classes.about_banner_element_block} ${classes.active}`
                    : classes.about_banner_element_block
            }
            onClick={() => {
                props.selectElement(props.banner)
            }}
        >
            <img src={props.banner.icon_url} alt="" className={classes.about_banner_element_icon}/>
            <div className={
                props.cell[0].id === props.banner.id
                    ? `${classes.about_banner_element_body} ${classes.active}`
                    : classes.about_banner_element_body
            }
            >
                {props.banner.title}
            </div>
        </div>
    );
};

export default AboutBannerElement;