import { useState } from "react";

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
	const [newNumber, setnewNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const objPerso = {
			name: newName,
			number: newNumber,
			id: persons.length + 1,
		};

		const names = persons.map((e) => e.name);
		names.indexOf(newName) !== -1
			? alert(`${newName} is already added to phonebook`)
			: setPersons(persons.concat(objPerso));
		setNewName("");
		setnewNumber("");
	};

	const handleName = (event) => setNewName(event.target.value);
	const handleNum = (event) => setnewNumber(event.target.value);

	return (
		<>
			<H2 text="Phonebook" />
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
				{persons.map((e) => (
					<List key={e.id} name={e.name} number={e.number} />
				))}
			</ul>
		</>
	);
};

export default App;
