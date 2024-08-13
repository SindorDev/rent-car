import { api } from "./index"

const modelApi = api.injectEndpoints({
     endpoints: (build) => ({
          getModel: build.query({
               query: () => ({
                    url: "/model"
               })
          })
     })
})


export const { useGetModelQuery } = modelApi