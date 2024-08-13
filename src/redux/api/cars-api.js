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
        }),
        getDetailsCar: build.mutation({
            query: (id) => ({
                url: `cars/${id}`
            })
        })
    })
});

export const { useGetCarsQuery, useGetDetailsCarMutation } = carsApi;