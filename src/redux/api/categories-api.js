import { api } from "./index";

const categoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => ({
                url: "/categories",
            }),
            providesTags: ["Cars"],
        }),
        createCategories: build.mutation({
            query: (body) => ({
                url: "/categories/create",
                method: "POST",
                body
            }),
            invalidatesTags: ["Cars"],
        }),
        deleteCategories: build.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cars"],
        })
    }),
});

export const { useGetCategoriesQuery, useCreateCategoriesMutation, useDeleteCategoriesMutation } = categoriesApi