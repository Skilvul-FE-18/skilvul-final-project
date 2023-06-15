import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Cookies from 'universal-cookie'
const ToolsCookies = new Cookies()

export const getUser = () => async (dispatch) => {
    try {
      // Lakukan permintaan ke API untuk mendapatkan data pengguna
      const response = await axios.get('https://64532ddfe9ac46cedf1ede09.mockapi.io/Users');
  
      // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
      dispatch(setUserData(response.data));
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const getUserById=(id)=>async(dispatch)=>{
    try {
        // Lakukan permintaan ke API untuk mendapatkan data pengguna berdasarkan ID
        const response = await axios.get(`https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`);
    
        // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
        dispatch(setUserData(response.data));
      } catch (error) {
        console.error('Error:', error);
      }
}

export const updateUser = (id, userData) => async (dispatch) => {
    try {
      // Lakukan permintaan ke API untuk memperbarui data pengguna
      const response = await axios.put(
        `https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`,
        userData
      );
  
      // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
      dispatch(setUserData(response.data));
    } catch (error) {
      console.error('Error:', error);
    }
  }



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
        },
    }
})


export const { setAuthStatus,setUserData,setToken,setRefreshToken,logout } = userSlice.actions

export default userSlice.reducer