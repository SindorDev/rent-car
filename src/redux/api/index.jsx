import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { signOut } from "../slices/authSlice";
const baseQuery = async (args, api, extraOptions) => {
     const { dispatch } = api

     const rawBaseQuery = fetchBaseQuery({
          baseUrl: "http://167.71.71.212:3000",
          prepareHeaders: (headers) => {
               const token = localStorage.getItem("token")
               headers.set("Content-Type", "application/json")
               headers.set("Access-Control-Allow-Origin", "http://localhost:5173/")
               headers.set("Access-Control")
               if(token) {
                    headers.set("authorization", `Bearer ${token}`)
               }

               return headers
          }
     })

     const response = await rawBaseQuery(args, api, extraOptions)


     if(response.error) {
          const { status } = response.error
          if(status === 401 || status === 403) {
               dispatch(signOut())
          }
     }
     return response
}

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0})

export const api = createApi({
     reducerPath: "api",
     baseQuery: baseQueryWithRetry,
     tagTypes: ["User"],
     endpoints: () => ({})
})