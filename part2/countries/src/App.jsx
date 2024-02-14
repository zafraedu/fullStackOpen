import countryService from "./services/country";
import { useState } from "react";
import CompleteCountrie from "./components/CompleteCountrie";

function App() {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState("");

	useState(() => {
		countryService.getAll().then((initAllCountries) => {
			const countrieData = initAllCountries.map((element) => ({
				name: element.name.common,
				flag: element.flags,
				languages: element.languages,
				capital: element.capital,
				area: element.area,
			}));
			setCountries(countrieData);
		});
	}, []);

	const handleFilter = ({ target: { value } }) => setFilter(value);

	const filterCountries = countries.filter((e) => {
		return e.name.toLowerCase().includes(filter.toLowerCase());
	});

	let displayFiltered = filterCountries;
	let message = "";
	if (filterCountries.length > 10) {
		displayFiltered = [];
		message = filter.length === 0 ? "" : "Too many matches, specify another filter";
	} else if (filterCountries.length === 1) displayFiltered = [];

	return (
		<>
			<label htmlFor="filter"> find countries </label>
			<input type="text" onChange={handleFilter} value={filter} id="filter" />
			{!message ? "" : <p>{message}</p>}
			{displayFiltered.map((e) => (
				<div key={e.name}>{e.name}</div>
			))}
			{filterCountries.length === 1 && <CompleteCountrie {...filterCountries[0]} />}
		</>
	);
}

export default App;
