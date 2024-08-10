import { api } from "./index"

const userApi = api.injectEndpoints({
     endpoints: (build) => ({
         
          loginIn : build.mutation({
               query: (body) => ({
                    url: "/auth/signin",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }),
          signUp : build.mutation({
               query: (body) => ({
                    url: "/auth/signup",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }),
          verifyOtp : build.mutation({
               query: (body) => ({
                    url: "auth/otp-verify",
                    method: "POST",
                    body
               }), 
               providesTags: ["User"],
          }) 
     })
})

export const { useLoginInMutation , useSignUpMutation, useVerifyOtpMutation} = userApi