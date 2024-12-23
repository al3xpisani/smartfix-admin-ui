import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Meta, Result, Results } from "../types/Category";

const baseUrl = "https://json-200krecords-category-server.vercel.app";
// const baseUrl = "http://localhost:3003";

const endpointCategoriesUrl = "/data";
const endpointUrlPagination = "/meta";

const apiSlice = createApi({
  tagTypes: ["Categories"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query<Results, void>({
      query: () => `${endpointCategoriesUrl}`,
      providesTags: ["Categories"],
    }),
    getCategory: builder.query<Category, string>({
      query: (id) => `${endpointCategoriesUrl}/${id}`,
      providesTags: ["Categories"],
    }),
    getPagination: builder.query<Meta, void>({
      query: () => `${endpointUrlPagination}`,
      providesTags: ["Categories"],
    }),
    // addItem: builder.mutation({
    //   query: (newItem) => ({
    //     url: "items",
    //     method: "POST",
    //     body: newItem,
    //   }),
    // }),
    // updateItem: builder.mutation({
    //   query: ({ id, ...updatedItem }) => ({
    //     url: `items/${id}`,
    //     method: "PUT",
    //     body: updatedItem,
    //   }),
    // }),
    deleteCategory: builder.mutation<Result, { id: string }>({
      query: (category: Category) => ({
        url: `${endpointCategoriesUrl}/${category.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetPaginationQuery,
  //   useAddItemMutation,
  //   useUpdateItemMutation,
  useDeleteCategoryMutation,
} = apiSlice;

export default apiSlice;
