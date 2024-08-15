import { api } from "./index"

const modelApi = api.injectEndpoints({
     endpoints: (build) => ({
          sendUploadFile: build.mutation({
               query: (body) => ({
                    url: "/upload/multiple",
                    method: "POST",
                    body
               })
          })
     })
})


export const { useSendUploadFileMutation } = modelApi