import React from 'react';
import classes from './MyMiddleSingleCell.module.css'
import MyLowTitle from "../../../../UIUX/titles/low_title/MyLowTitle";
import RegularText from "../../../../UIUX/body/RegularText";

const MiddleSingleCell = ({post}) => {
    return (
        <div className={classes.single_post}>
            <div className={classes.single_post_title_block}>
                <MyLowTitle>{post.title}</MyLowTitle>
            </div>
            <div>
                <RegularText>{post.body}</RegularText>
            </div>
            {post.sub_body
                ? <p className={classes.sub_body_post_component}>{post.sub_body}</p>
                : <></>
            }
        </div>
    );
};

export default MiddleSingleCell;