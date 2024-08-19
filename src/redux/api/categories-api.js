import { api } from "./index";

const categoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => ({
                url: "/categories",
            }),
            providesTags: ["Cars"],
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi