const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(express.json());

morgan.token("body", (req) => (
	req.method === "POST" && req.body.name && req.body.number
	? JSON.stringify(req.body)
	: null
));

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (request, response) => {
	response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find((person) => person.id === id);

	person ? response.json(person) : response.status(404).end();
});

app.post("/api/persons", (request, response) => {
	const body = request.body;

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: "name or number missing",
		});
	} else if (persons.find((person) => person.name === body.name)) {
		return response.status(400).json({
			error: "name must be unique",
		});
	}

	const person = {
		id: Math.floor(Math.random() * 100 + 1), // range [1, 100]
		name: body.name,
		number: body.number,
	};

	persons = [...persons, person];
	response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((person) => person.id !== id);

	response.status(204).end();
});

app.get("/info", (request, response) => {
	response.send(
		`
		<p>Phonebook has info for ${persons.length} people</p>
		<p>${new Date()}</p>
		`
	);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port http://localhost:${PORT}/api/persons\n`);
