import { createSlice } from "@reduxjs/toolkit";

const preferences= createSlice({
    name: 'preferences',
    initialState:{
        darkmode: false,
    },
    reducers:{
        toggleDarkMode: (state)=>{
            state.darkmode = !state.darkmode;
        }
    }
})
export const {toggleDarkMode}= preferences.actions;
export default preferences.reducer;