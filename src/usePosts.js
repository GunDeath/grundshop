import axios from "axios";
import {useState, useEffect} from "react";

const siteURI = 'https://mybackend.rusgetter.store/wp-json/wp/v2'

export const usePosts = (id) => {
    const [mainPost, setMainPost] = useState([]);
    useEffect(() => {
        axios.get(siteURI+`/posts?include[]=${id}`)
            .then(response => {
                if(response.status === 200){
                    setMainPost(response.data)
                }
            })
            .catch(error => {})
    }, [id])
    return mainPost;
}

export const useCategoriesMedia = () => {
    const [mainMedia, setMainMedia] = useState([]);
    useEffect(() => {
        axios.get(siteURI+`/media?filter[media_category]`)
            .then(response => {
                if(response.status === 200){
                    setMainMedia(response.data)
                }
            })
            .catch(error => {})
    }, [])
    return mainMedia;
}

export const usePostCategories = (id) => {
    const [mainCategory, setMainCategory] = useState([]);
    useEffect(() => {
        axios.get(siteURI+`/posts?categories=${id}`)
            .then(response => {
                if(response.status === 200){
                    setMainCategory(response.data)
                }
            })
            .catch(error => {})
    }, [id])
    return mainCategory;
}

export const usePostBottomBlock = () => {
    const [postList, setPostList] = useState([])
    useEffect(()=>{
        getBottomPosts()
    }, [])

    let getBottomPosts = () => {
        axios.get(siteURI+`/posts?categories=34&acf_format=standard`)
            .then(response => {
                if(response.status === 200){
                    setPostList(response.data)
                }
            })
            .catch(error => {})
    }
    return postList;
}