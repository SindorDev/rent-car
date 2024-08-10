import { api } from "./index";

const userInfoApi = api.injectEndpoints({
     endpoints: (build) => ({
          getUserInfo: build.query({
               query: () => ({
                    url: "auth/getMe",
                    method: "GET"
               })
          })
     })
})

export const { useGetUserInfoQuery } = userInfoApi 