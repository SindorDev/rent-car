import { api } from "./index";

const userInfoApi = api.injectEndpoints({
     endpoints: (build) => ({
          getUserInfo: build.query({
               query: () => ({
                    url: "auth/profile",
                    method: "GET"
               }),
               providesTags: ["User"]
          })
     })
})

export const { useGetUserInfoQuery } = userInfoApi 