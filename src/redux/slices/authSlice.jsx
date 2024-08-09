import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     user: localStorage.getItem("User") || null,
     token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
     name: "auth", 
     initialState,
     reducers: {
          signUpUser: (state, action) => {
               localStorage.setItem("User", JSON.stringify(action.payload.user))
               state.user = action.payload.user
          },
          logIn: (state, action) => {
               state.token = action.payload.token,
               state.user = action.payload.user
               localStorage.setItem("token", action.payload.token)
               localStorage.setItem("User", JSON.stringify(action.payload.user))
          },
          signOut: (state) => {
               state.token = null
               localStorage.removeItem("token")
               state.user = null
               localStorage.removeItem("User")
          }
     }
})

export const { signOut, signUpUser, logIn } = authSlice.actions
export const reducer =  authSlice.reducer