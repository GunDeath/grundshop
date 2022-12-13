import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {addProductReviews} from "../../../../customFunctions";

const MaterialUiRating = ({product}) => {

    const addRating = (productId, rating) => {
        const newReview = { "product_id" : productId,  "review" : "good product",  "reviewer" : `anonymous${Math.random()}`,  "reviewer_email" : `anonymous${Math.random()}@anonymous.ru`,  "rating" : rating}
        addProductReviews(newReview)
    }

    return (
        <Stack spacing={1}>
            <Rating name="half-rating" onClick={
                (e)=>addRating(product.id, e.target.value)
            } defaultValue={Number(product.average_rating) || 0} precision={1} />
        </Stack>
    );
};

export default MaterialUiRating;