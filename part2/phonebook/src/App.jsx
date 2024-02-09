import React, { useState } from "react";

const H2 = ({ text }) => <h2>{text}</h2>;
const List = ({ name, number }) => (
	<li>
		{name} {number}
	</li>
);

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newName.trim()) return;

		if (persons.find((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
			return;
		}
		setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
		setNewName("");
		setNewNumber("");
	};

	const handleName = (event) => setNewName(event.target.value);
	const handleNum = (event) => setNewNumber(event.target.value);
	const handleFilter = (event) => setFilter(event.target.value);

	const filteredPersons = persons.filter((person) => {
		return person.name.toLowerCase().includes(filter.toLowerCase());
	});

	return (
		<>
			<H2 text="Phonebook" />
			<div>
				filter shown with <input id="filter" onChange={handleFilter} value={filter} />
			</div>
			<H2 text="add a new" />
			<form>
				<div>
					name: <input id="n-me" onChange={handleName} value={newName} />
				</div>
				<div>
					number: <input id="number" onChange={handleNum} value={newNumber} />
				</div>
				<div>
					<button id="btnSubmit" onClick={handleSubmit} type="submit">
						add
					</button>
				</div>
			</form>
			<H2 text="Numbers" />
			<ul>
				{filteredPersons.map((e) => (
					<List key={e.id} name={e.name} number={e.number} />
				))}
			</ul>
		</>
	);
};

export default App;
