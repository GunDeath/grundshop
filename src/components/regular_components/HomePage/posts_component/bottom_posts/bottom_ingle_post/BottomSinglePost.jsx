import React from 'react';
import classes from "./BottomSinglePost.module.css";
import MyBlogTitle from "../../../../../UIUX/titles/blog_title/MyBlogTitle";

const BottomSinglePost = ({post}) => {
    return (
        <>
            <div className={classes.bottom_post_img_block}>
                <img src={post.fimg_url} alt="" className={classes.bottom_post_img}/>
                {post.acf.sub_img !== false
                    ? <img src={post.acf.sub_img} alt="" className={`${classes.bottom_post_img} ${classes.absolute_img}`}/>
                    : <></>
                }
            </div>
            <div className={classes.bottom_post_info_section}>
                <div>
                    <MyBlogTitle title={post.title.rendered}/>
                </div>
                <div className={classes.bottom_post_info_text}>
                    {post.content.rendered}
                </div>
                {
                    post.acf.sub_blog_text !== ''
                        ? <div className={classes.bottom_post_info_text}>{post.acf.sub_blog_text}</div>
                        : <></>
                }
                {
                    post.acf.third_blog_abstract !== ''
                        ? <div className={
                            post.id !== 733 ? classes.bottom_post_info_text : `${classes.bottom_post_info_text} ${classes.third_text}`
                        }>{post.acf.third_blog_abstract}</div>
                        : <></>
                }
                {
                    post.acf.fouth_blog_text !== ''
                        ? <div className={
                            post.id !== 733 ? classes.bottom_post_info_text : `${classes.bottom_post_info_text} ${classes.third_text}`
                        }>{post.acf.fouth_blog_text}</div>
                        : <></>
                }
            </div>
        </>
    );
};

export default BottomSinglePost;