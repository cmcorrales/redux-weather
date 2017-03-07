import axios from 'axios';

const API_KEY='19b99729124f7a08186bb80650a2cf62';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url= `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
