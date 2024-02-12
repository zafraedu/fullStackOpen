import { useState, useEffect } from "react";
import { H2 } from "./components/Header.jsx";
import Table from "./components/Table.jsx";
import Form, { InputChange } from "./components/Form.jsx";
import personService from "./services/person.js";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		personService.getAll().then((initPersons) => setPersons(initPersons));
	}, []);

	const handleName = (event) => setNewName(event.target.value);
	const handleNum = (event) => setNewNumber(event.target.value);
	const handleFilter = (event) => setFilter(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newName.trim() || !newNumber.trim()) {
			alert("empty field");
			return;
		}

		const findPerson = persons.find((person) => person.name === newName);
		if (!findPerson) {
			personService.create({ name: newName, number: newNumber }).then((returnedPerson) => {
				setPersons([...persons, returnedPerson]);
				setNewName("");
				setNewNumber("");
			});
		} else {
			if (confirm(`${findPerson.name} is already added to phonebook, replace the old number with a new one ?`)) {
				personService.update(findPerson.id, { ...findPerson, number: newNumber }).then((rPerson) => {
					setPersons(persons.map((person) => (person.id !== rPerson.id ? person : rPerson)));
					setNewName("");
					setNewNumber("");
				});
			}
		}
	};

	const deletePerson = (id) => () => {
		const person = persons.find((e) => e.id === id);
		if (confirm(`delete ${person.name} ?`)) {
			personService.del(person.id);
			setPersons(persons.filter((e) => e.id !== id));
		}
	};

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
			<Table filteredPersons={filteredPersons} deletePerson={deletePerson} />
		</>
	);
};

export default App;
