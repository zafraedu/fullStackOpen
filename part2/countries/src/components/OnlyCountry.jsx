import weatherService from "../services/country";
import { useState, useEffect } from "react";

const OnlyCountry = ({ country }) => {
	const [weather, setWeather] = useState([]);

	useEffect(() => {
		weatherService
			.getGeo(country.capital)
			.then((geo) => {
				weatherService
					.getWeather(geo[0].lat, geo[0].lon)
					.then((resWeather) => {
						const weather = {
							icon: resWeather.weather[0].icon,
							temp: resWeather.main.temp,
							wind: resWeather.wind.speed,
						};
						setWeather([weather]);
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}, [country]);

	return (
		<>
			<h1>{country.name}</h1>
			<p>capital {country.capital}</p>
			<p>area {country.area}</p>
			<h2>languages</h2>
			<ul>
				{Object.values(country.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={country.flag.png} alt={country.flag.alt} />
			{weather.length > 0 && (
				<>
					<h2>Weather in {country.capital}</h2>
					<p>temperature {(weather[0].temp - 273.15).toFixed(0)} ºC</p>
					<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
					<p>wind {weather[0].wind} m/s</p>
				</>
			)}
		</>
	);
};

export default OnlyCountry;
