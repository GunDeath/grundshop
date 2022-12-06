import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../../woocommerce_api";

export const categoryApi = createApi({
    reducerPath: '/products/categories',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: build => ({
        getCategories: build.query({query: () => `/products/categories`})
    })
})
