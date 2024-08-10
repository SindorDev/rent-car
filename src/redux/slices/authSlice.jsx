import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     user: JSON.parse(localStorage.getItem("User")) || null,
     token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
     name: "auth", 
     initialState,
     reducers: {
          logIn: (state, action) => {
               const user = JSON.parse(atob(action.payload.accessToken.split('.')[1]))
               state.user = user
               localStorage.setItem("User", JSON.stringify(user))
               localStorage.setItem("token", action.payload.accessToken)
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