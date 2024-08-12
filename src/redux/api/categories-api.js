import { api } from "./index";

const categoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => ({
                url: "/categories",
            }),
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi