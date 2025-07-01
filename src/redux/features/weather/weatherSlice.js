import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData= createAsyncThunk('weather/fetchWeatherData', async(cityName)=>{
    const apikey= "c3a4da0f4acb785942cd7923f9250799"
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`)
    const data=await response.json()
    return data
})

const weatherSlice= createSlice({
    name:'weather',
    initialState:{
        weatherData: [],
        loading: false,
        error:null,
    },
    reducers:{
        clearWeatherData:(state)=>{
            state.weatherData=[];
            state.loading= false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWeatherData.pending, (state)=>{
            state.loading= true;
            state.error= null;
        })
        .addCase(fetchWeatherData.fulfilled,(state, action)=>{
            state.loading= false;
            state.weatherData.push(action.payload)
        })
        .addCase(fetchWeatherData.rejected, (state, action)=>{
            state.loading= false;
            state.error= action.error.message
        })
    }

})
export const {clearWeatherData}= weatherSlice.actions
export default weatherSlice.reducer