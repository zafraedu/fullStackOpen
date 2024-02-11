const ElementTable = ({ name, number, deletePerson }) => (
	<>
		<td>{name}</td>
		<td>{number}</td>
		<td><button onClick={deletePerson}>delete</button></td>
	</>
);

const Table = ({ filteredPersons, deletePerson }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Number</th>
				</tr>
			</thead>
			<tbody>
				{filteredPersons.map((e) => (
					<tr key={e.id}>
						<ElementTable deletePerson={deletePerson(e.id)} name={e.name} number={e.number} />
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
