import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_BASE_URL

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ("/products")
        }),
            postData: builder.mutation({
                query: (data, token) => ({
                    url: "",
                    method: "POST",
                    body: data,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "Application/json"
                    }
                })
            }),
    })
})

export const { useGetAllProductsQuery, usePostDataMutation } = productApi