import axios from "axios"
import { apiKey } from "../constanta";

const GET_CURR_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GET_FORECAST_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getCurrentWeather = (cityData) => {
    return axios.get(`${GET_CURR_WEATHER_URL}?lat=${cityData.lat}&lon=${cityData.long}&appid=${apiKey}&units=metric`)
}

export const getForecastWeather = (cityData) => {
    return axios.get(`${GET_FORECAST_WEATHER_URL}?lat=${cityData.lat}&lon=${cityData.long}&appid=${apiKey}&units=metric`)
}