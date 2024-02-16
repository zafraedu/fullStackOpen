const Filter = ({ handleFilter, filter }) => {
	return (
		<>
			<label htmlFor="filter"> find countries </label>
			<input type="text" onChange={handleFilter} value={filter} id="filter" />
		</>
	);
};

export default Filter;
