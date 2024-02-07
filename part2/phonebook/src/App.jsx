import { useState } from "react";

const List = ({ name }) => <li>{name}</li>;

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
	const [newName, setNewName] = useState("");

	const handleSubmit = (event) => {
    event.preventDefault();

    const names = persons.map((e) => e.name);
    names.indexOf(newName) !== -1
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, id: persons.length + 1 }));

		setNewName("");
	};

	const handleImput = (event) => setNewName(event.target.value);

	return (
    <div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleImput} />
				</div>
				<div>
					<button type="submit" onClick={handleSubmit}>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((e) => (
          <List key={e.id} name={e.name} />
          ))}
			</ul>
		</div>
	);
};

export default App;
