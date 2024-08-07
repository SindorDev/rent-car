import { api } from "./index"

const userApi = api.injectEndpoints({
     endpoints: (build) => ({
         
          loginIn : build.mutation({
               query: (body) => ({
                    url: "/auth/login",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }),
          signUp : build.mutation({
               query: (body) => ({
                    url: "/auth/register",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }),
          verifyOtp : build.mutation({
               query: (body) => ({
                    url: "/auth/verify-otp",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }) 
     })
})

export const { useLoginInMutation , useSignUpMutation, useVerifyOtpMutation} = userApi