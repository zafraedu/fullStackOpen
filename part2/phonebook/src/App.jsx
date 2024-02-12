import { useState, useEffect } from "react";
import { H2 } from "./components/Header.jsx";
import Table from "./components/Table.jsx";
import Form, { InputChange } from "./components/Form.jsx";
import PopUp from "./components/PopUp.jsx";
import personService from "./services/person.js";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");
	const [popUpMsg, setPopUpMsg] = useState(null);

	useEffect(() => {
		personService.getAll().then((initPersons) => setPersons(initPersons));
	}, []);

	const handleName = (event) => setNewName(event.target.value);
	const handleNum = (event) => setNewNumber(event.target.value);
	const handleFilter = (event) => setFilter(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newName.trim()) {
			alert("empty name field");
			return;
		} else if (!newNumber.trim()) {
			alert("empty number field");
			return;
		}

		const findPerson = persons.find((person) => person.name === newName);
		if (!findPerson) {
			personService
				.create({ name: newName, number: newNumber })
				.then((returnedPerson) => {
					setPersons([...persons, returnedPerson]);
					setNewName("");
					setNewNumber("");
					setPopUpMsg(`Added ${returnedPerson.name}`);
					setTimeout(() => setPopUpMsg(null), 5000);
				});
		} else {
			if (confirm(`${findPerson.name} is already added to phonebook, replace the old number with a new one ?`)) {
				personService
					.update(findPerson.id, { ...findPerson, number: newNumber })
					.then((rPerson) => {
						setPersons(persons.map((person) => (person.id !== rPerson.id ? person : rPerson)));
						setNewName("");
						setNewNumber("");
						setPopUpMsg(`Changed ${findPerson.name} number`);
						setTimeout(() => setPopUpMsg(null), 5000);
					})
					.catch(() => {
						setPersons(persons.filter((e) => e.id !== findPerson.id));
						setNewName("");
						setNewNumber("");
						setPopUpMsg(`Information of ${findPerson.name} has already been removed from server`);
						setTimeout(() => setPopUpMsg(null), 5000);
					});
			}
		}
	};

	const deletePerson = (id) => () => {
		const person = persons.find((e) => e.id === id);
		if (confirm(`delete ${person.name} ?`)) {
			personService
				.del(person.id)
				.then(() => {
					setPersons(persons.filter((e) => e.id !== id));
					setPopUpMsg(`Deleted ${person.name} for phonebook`);
					setTimeout(() => setPopUpMsg(null), 5000);
				})
				.catch(() => {
					setPersons(persons.filter((e) => e.id !== person.id));
					setNewName("");
					setNewNumber("");
					setPopUpMsg(`Information of ${person.name} has already been removed from server`);
					setTimeout(() => setPopUpMsg(null), 5000);
				});
		}
	};

	const filteredPersons = persons.filter((person) => {
		return person.name.toLowerCase().includes(filter.toLowerCase());
	});

	return (
		<>
			<H2 text="Phonebook" />
			<PopUp message={popUpMsg} />
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
