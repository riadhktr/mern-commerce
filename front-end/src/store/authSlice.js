import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice ({





    name:'auth',
    initialState:[
        {
            id:1,
            name:"user",
            email:"test@gmail.com",
            token: null
        }
    ],
    reducers:{
        setUser :(state,action)=>
        {
            const { accessToken } = action.payload
            state.token = accessToken
            return action.payload
        },
        logOut:(state,action) =>
        {
            state.token =null
        }
    }
})
export const {setUser,logOut} =authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token