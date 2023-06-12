import { createSlice } from "@reduxjs/toolkit";
import  axios  from 'axios';



export const getArtikel = () => async (dispatch) => {
    dispatch(startFetching());

    let config = {
        url:"https://64852924a795d24810b6be16.mockapi.io/Artikel",
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    }

    try {
       let getDataartikel = await axios(config);
         let result = getDataartikel.data;
        dispatch(successGetArtikel(result));
    } catch (error) {
        console.log(error);
    }
}


const initialState = {
  artikel: [],
  isLoading: false,
};

export const artikelSlice = createSlice({
  name: "artikel",
  initialState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    successGetArtikel: (state, action) => {
      state.artikel = action.payload;
      state.isLoading = false;
    },
  },
});




export const { startFetching,successGetArtikel } = artikelSlice.actions;

export default artikelSlice.reducer;
