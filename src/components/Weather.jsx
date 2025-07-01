import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearWeatherData, fetchWeatherData } from "../redux/features/weather/weatherSlice";

const Weather = () => {
    const [city, setCity]= useState('')
    const dispatch= useDispatch()
  const { error, loading, weatherData } = useSelector((state) => state.weather);
const handlefetchWeatherData= async(e)=>{
e.preventDefault()
if(city.trim()==='') return
await dispatch(fetchWeatherData(city))
setCity('')
}

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handlefetchWeatherData}>
        <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city name" className="border" />
        <button type="submit">search weather</button>
        <button  onClick={()=> dispatch(clearWeatherData())} type="button">clear</button>
      </form>
      {/* weather cards with loading and error */}
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {weatherData.length >0 ? <> {weatherData.map((data, i) => (
      <div key={i}>
        <h1>{data.name}</h1>
        <p>temperature: {data.main.temp}°C</p>
        <p>description: {data.weather[0].description}</p>
      </div>
    ))}</> :<p>data is not found</p>}
      </div>
    </div>
  );
};

export default Weather;
