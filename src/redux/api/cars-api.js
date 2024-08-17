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
        }),
        sendCarForm: build.mutation({
            query: (body) => ({
                url: "/cars/create",
                method: "POST",
                body
            })
        }),
        
        deleteCars: build.mutation({
            query: (id) => ({
                url: `/cars/${id}`,
                method: "DELETE",
            })
        }),
    })
});

export const { useGetCarsQuery, useGetDetailsCarMutation, useSendCarFormMutation, useDeleteCarsMutation } = carsApi;