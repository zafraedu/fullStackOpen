import axios from "axios";
import { useState, useEffect } from "react";
import { H2 } from "./components/Header.jsx";
import List from "./components/List.jsx";
import Form, { InputChange } from "./components/Form.jsx";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3001/persons")
			.then((response) => {
				setPersons(response.data);
			});
	}, []);

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
			<InputChange textLabel="filter shown with " type="text" value={filter} event={handleFilter} id="filter" />
			<H2 text="add a new" />
			<Form
				newName={newName}
				handleName={handleName}
				newNumber={newNumber}
				handleNum={handleNum}
				handleSubmit={handleSubmit}
			/>
			<H2 text="Numbers" />
			<List filteredPersons={filteredPersons} />
		</>
	);
};

export default App;
