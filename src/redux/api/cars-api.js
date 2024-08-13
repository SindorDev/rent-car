import {api} from "./index";

const carsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query({
            query: (params) => ({
                url: "/cars",
                params: {
                    categories: params?.categories,
                    model: params?.model,
                    ...params,
                }
            })
        })
    })
});

export const { useGetCarsQuery } = carsApi;