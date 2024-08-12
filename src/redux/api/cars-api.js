import {api} from "./index";

const carsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query({
            query: () => ({
                url: "/cars"
            })
        })
    })
});

export const { useGetCarsQuery } = carsApi;