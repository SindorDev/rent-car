import { api } from "./index";

const userInfoApi = api.injectEndpoints({
     endpoints: (build) => ({
          getUserInfo: build.query({
               query: () => ({
                    url: "auth/profile",
                    method: "GET"
               }),
               providesTags: ["User"]
          }),
          getPeople: build.query({
               query: () => ({
                    url: "users",
                    method: "GET"
               }),
               providesTags: ["User"]
          }),
          deleteUser: build.mutation({
               query: (id) => ({
                    url: `users/${id}`,
                    method: "DELETE"
               }),
               invalidatesTags: ["User"]
          })
     })
})

export const { useGetUserInfoQuery, useGetPeopleQuery, useDeleteUserMutation } = userInfoApi 