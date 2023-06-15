// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
// import Cookies from 'universal-cookie'
// const ToolsCookies = new Cookies()

// export const getUser = () => async (dispatch) => {
//     let config = {
//       url: "https://64532ddfe9ac46cedf1ede09.mockapi.io/Users",
//       method: "get",
//       headers: {
//           "Content-Type": "application/json",
//     }
// }
//     try {
//       let getDataUser = await axios(config);
//         let result = getDataUser.data;
//         dispatch(setUserData(result));
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

// export const getUserById=(id)=>async(dispatch)=>{
//     try {
//         // Lakukan permintaan ke API untuk mendapatkan data pengguna berdasarkan ID
//         const response = await axios.get(`https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`);
    
//         // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
//         dispatch(setUserData(response.data));
//       } catch (error) {
//         console.error('Error:', error);
//       }
// }

// export const updateUser = (id, userData) => async (dispatch) => {
//     try {
//       // Lakukan permintaan ke API untuk memperbarui data pengguna
//      let config = {
//             url:`https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`,
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             data: JSON.stringify(userData),
//      }
//      await axios(config)

//      dispatch(editUser({
//         id: id,
//         newData: userData
//      }))
//       // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
      
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }



// let getStatusAuth = ToolsCookies.get('status_login')
// let getDataAuth = ToolsCookies.get('user_data')

// export const userSlice = createSlice({
//     name: 'users',
//     initialState: {
//         authStatus: getStatusAuth ? true : false,
//         userData: getDataAuth ? getDataAuth : null,
//         token: null, // duration 1 day
//         refreshToken: '', // duration 1 month
//     },
//     reducers: {
//         setAuthStatus: (state, action) => {
//             state.authStatus += action.payload
//         },

//         setUserData: (state, action) => {
//             state.userData = action.payload
//         },

//         setToken: (state, action) => {
//             state.token = action.payload
//         },

//         setRefreshToken: (state, action) => {
//             state.refreshToken = action.payload
//         },
//         logout: (state, action) =>{
//             state.authStatus = false
//             state.userData = null
//             state.token = null
//             state.refreshToken = null
//         },
//         editUser: (state, action) => {
//             const { id, newData } = action.payload;
//             const updatedUserData = state.userData.map((user) => {
//               if (user.id === id) {
//                 return { ...user, ...newData };
//               }
//               return user;
//             });
//             state.userData = updatedUserData;
//           },
//     }
// })


// export const { setAuthStatus,setUserData,setToken,setRefreshToken,logout,editUser } = userSlice.actions

// export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

const ToolsCookies = new Cookies();

export const getUser = () => async (dispatch) => {
  let config = {
    url: "https://64532ddfe9ac46cedf1ede09.mockapi.io/Users",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    }
  };
  try {
    let getDataUser = await axios(config);
    let result = getDataUser.data;
    dispatch(setUserData(result));
  } catch (error) {
    console.error('Error:', error);
    throw error; // Melempar kembali kesalahan untuk ditangani di komponen yang menggunakan userReducer
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    // Lakukan permintaan ke API untuk mendapatkan data pengguna berdasarkan ID
    const response = await axios.get(`https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`);
  
    // Setelah mendapatkan data pengguna, panggil action creator setUserData untuk memperbarui state.userData
    dispatch(setUserData(response.data));
  } catch (error) {
    console.error('Error:', error);
    throw error; // Melempar kembali kesalahan untuk ditangani di komponen yang menggunakan userReducer
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    // Lakukan permintaan ke API untuk memperbarui data pengguna
    let config = {
      url: `https://64532ddfe9ac46cedf1ede09.mockapi.io/Users/${id}`,
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(userData),
    };
    await axios(config);

    // Dispatch editUser setelah pembaruan data pengguna berhasil
    dispatch(editUser({
      id: id,
      newData: userData
    }));
  } catch (error) {
    console.error('Error:', error);
    throw error; // Melempar kembali kesalahan untuk ditangani di komponen yang menggunakan userReducer
  }
};

let getStatusAuth = ToolsCookies.get('status_login');
let getDataAuth = ToolsCookies.get('user_data');

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
      state.authStatus += action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    logout: (state, action) => {
      state.authStatus = false;
      state.userData = null;
      state.token = null;
      state.refreshToken = null;
    },
    editUser: (state, action) => {
      const { id, newData } = action.payload;
      const updatedUserData = state.userData.map((user) => {
        if (user.id === id) {
          return { ...user, ...newData };
        }
        return user;
      });
      state.userData = updatedUserData;
    },
  },
});

export const { setAuthStatus, setUserData, setToken, setRefreshToken, logout, editUser } = userSlice.actions;

export default userSlice.reducer;
