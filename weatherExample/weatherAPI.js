import axios from 'axios';
import {CONFIG} from './config.js';

export class WEATHERAPI{
    static getCurrentWeatherData= async(cityName)=>{
        let url=
        CONFIG.WEATHER_API.replace('~',cityName);
        console.log(url);
        return await axios.get(url+CONFIG.WEATHER_API_KEY);
    }
}
