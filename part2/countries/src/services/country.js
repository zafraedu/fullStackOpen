import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY;
const urlBase = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () =>  axios.get(urlBase).then((res) => res.data);
const getGeo = (city_name) => {
	return (
		axios
			.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${api_key}`)
			.then((res) => res.data)
	)
}

const getWeather = (lat, lon) => {
	return (
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
			.then((res) => res.data)
	)
}
export default { getAll, getGeo, getWeather };
