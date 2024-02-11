const Li = ({ name, number }) => (
	<li>
		{name} {number}
	</li>
);

const List = ({ filteredPersons }) => (
	<ul>
		{filteredPersons.map((e) => (
			<Li key={e.id} name={e.name} number={e.number} />
		))}
	</ul>
);

const ElementTable = ({ id, name, number }) => (
	<>
		<td>{name}</td>
		<td>{number}</td>
	</>
);

const Table = ({ filteredPersons }) => {
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
						<ElementTable name={e.name} number={e.number} />
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
