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
               console.log(action);
          },
          logIn: (state, action) => {
               console.log(action);
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