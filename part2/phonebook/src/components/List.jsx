const Li = ({name, number}) => <li>{name} {number}</li>

const List = ({filteredPersons}) => (
	<ul>
		{filteredPersons.map((e) => (
			<Li key={e.id} name={e.name} number={e.number} />
		))}
	</ul>
);

export default List;
