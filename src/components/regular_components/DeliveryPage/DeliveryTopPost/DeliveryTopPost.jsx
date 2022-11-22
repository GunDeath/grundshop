import React from 'react';
import {usePosts} from "../../HomePage/posts_component/usePosts";
import TitleBlock from "../../../UIUX/titles/block_title/TitleBlock";
import {ReactComponent as ListLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-spisok.svg";
import {ReactComponent as MoneyLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-dengi.svg";
import {ReactComponent as DeliveryLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-dostavka.svg";
import classes from './DeliveryTopPost.module.css'
import RegularText from "../../../UIUX/body/RegularText";

const DeliveryTopPost = () => {
    const post = usePosts(755)[0]
    console.log(post)
    return (
        <div className={classes.top_post}>
            <div className={classes.top_post_info}>
                <div className={classes.top_post_info_text}>
                    <TitleBlock title={post.title.rendered}/>
                    <RegularText>
                        {post.content.rendered}
                    </RegularText>
                </div>
                <div className={classes.top_post_info_icon}>
                    <ListLogo className={classes.logo_styles}/>
                    <MoneyLogo className={classes.logo_styles}/>
                    <DeliveryLogo className={classes.logo_styles}/>
                </div>
            </div>
            <div className={classes.img_block}>
                <img src={post.fimg_url} alt="" className={classes.post_img}/>
            </div>
        </div>
    );
};

export default DeliveryTopPost;