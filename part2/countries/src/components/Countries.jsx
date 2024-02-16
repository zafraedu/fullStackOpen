import OnlyCountry from "./OnlyCountry";

const Countries = ({ filter, allCountries, setFilter }) => {
	const handleShow = (name) => () => setFilter(name);

	const filteredCountries = allCountries.filter((e) => {
		return e.name.toLowerCase().includes(filter.toLowerCase());
	});

	if (!filter) return "";
	else if (filteredCountries.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	} else if (filteredCountries.length === 1) {
		return <OnlyCountry country={filteredCountries[0]} />;
	} else {
		return (
			<>
				{filteredCountries.map((e) => (
					<div key={e.name}>
						{e.name} <button onClick={handleShow(e.name)}>show</button>
					</div>
				))}
			</>
		);
	}
};

export default Countries;
