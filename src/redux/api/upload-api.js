import { api } from "./index"

const modelApi = api.injectEndpoints({
     endpoints: (build) => ({
          sendUploadFile: build.mutation({
               query: (body) => ({
                    url: "/upload/multiple",
                    method: "POST",
                    body
               }),
               invalidatesTags: ["Cars"],               
          }),
          sendThumbnailFile: build.mutation({
               query: (body) => ({
                    url: "/upload/single",
                    method: "POST",
                    body
               }),
               invalidatesTags: ["Cars"]
          }),
          
     })
})


export const { useSendUploadFileMutation, useSendThumbnailFileMutation } = modelApi