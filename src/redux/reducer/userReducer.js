import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
const ToolsCookies = new Cookies()

let getStatusAuth = ToolsCookies.get('status_login')
let getDataAuth = ToolsCookies.get('user_data')

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        authStatus: getStatusAuth ? true : false,
        userData: getDataAuth ? getDataAuth : null,
        token: null, // duration 1 day
        refreshToken: '', // duration 1 month
    },
    reducers: {
        setAuthStatus: (state, action) => {
            state.authStatus += action.payload
        },

        setUserData: (state, action) => {
            state.userData = action.payload
        },

        setToken: (state, action) => {
            state.token = action.payload
        },

        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        logout: (state, action) =>{
            state.authStatus = false
            state.userData = null
            state.token = null
            state.refreshToken = null
        }
    }
})


export const { setAuthStatus,setUserData,setToken,setRefreshToken,logout } = userSlice.actions

export default userSlice.reducer