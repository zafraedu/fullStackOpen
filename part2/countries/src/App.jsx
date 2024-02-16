import { useEffect, useState } from "react";
import countryService from "./services/country";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
	const [allCountries, setAllCountries] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		countryService.getAll().then((initAllCountries) => {
			const countrieData = initAllCountries.map((element) => ({
				name: element.name.common,
				flag: element.flags,
				languages: element.languages,
				capital: element.capital,
				area: element.area,
			}));
			setAllCountries(countrieData);
		});
	}, []);

	const handleFilter = ({ target: { value } }) => setFilter(value);

	return (
		<>
			<Filter handleFilter={handleFilter} filter={filter} />
			<Countries filter={filter} allCountries={allCountries} setFilter={setFilter} />
		</>
	);
}

export default App;
