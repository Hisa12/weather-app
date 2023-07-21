const BASE = "http://api.weatherapi.com/v1/forecast.json?key=";
const URL = (search) =>
  `${BASE}${process.env.REACT_APP_API_KEY}&q=${search}&days=7&aqi=no&alerts=no`;

export default URL;
