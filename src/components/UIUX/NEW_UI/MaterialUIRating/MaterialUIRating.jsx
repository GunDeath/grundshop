import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const MaterialUiRating = ({product}) => {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={product.rating_count} precision={0.5} />
        </Stack>
    );
};

export default MaterialUiRating;