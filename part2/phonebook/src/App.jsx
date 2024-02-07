import { useState } from "react";

const List = ({ name, num }) => <li>{name}: {num}</li>;

const App = () => {
	const [persons, setPersons] = useState([
		{
			name: "Arto Hellas",
			num: "040-1234567",
			id: 1,
		},
	]);
	const [newName, setNewName] = useState("");
	const [newNum, setNewNum] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const names = persons.map((e) => e.name);
		names.indexOf(newName) !== -1
			? alert(`${newName} is already added to phonebook`)
			: setPersons(
					persons.concat({
						name: newName,
						num: newNum,
						id: persons.length + 1,
					})
			  );

		setNewName("");
		setNewNum("");
	};

	const handleName = (event) => setNewName(event.target.value)
	const handleNum = (event) => setNewNum(event.target.value)

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input onChange={handleName} value={newName} />
				</div>
				<div>
					number: <input onChange={handleNum} value={newNum} />
				</div>
				<div>
					<button onClick={handleSubmit} type="submit">
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((e) => (
					<List key={e.id} name={e.name} num={e.num}/>
				))}
			</ul>
		</div>
	);
};

export default App;
