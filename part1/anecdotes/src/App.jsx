import { useState } from "react";
//Components
const Header = ({ h2 }) => <h2>{h2}</h2>;
const Button = ({ value, onClick }) => <button onClick={onClick}>{value}</button>;
const GeneralAnecdote = ({ anecdote }) => <p>{anecdote}</p>;
const PopularAnecdote = ({ anecdote, voted }) => {
	const highValue = Math.max(...voted);
	if (highValue <= 0) return <p>No votes yet</p>;
	return (
		<>
			<p>{anecdote[voted.indexOf(highValue)]}</p>
			<p>has {highValue} votes</p>
		</>
	);
};
//Main App
const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];
	//hooks
	const [selected, setSelected] = useState(0);
	const [voted, setVoted] = useState(Array(8).fill(0));
	//handle Events
	const onGenerate = () => setSelected((anecdotes[selected] = Math.floor(Math.random() * anecdotes.length)));
	const onVote = () => {
		let cpy = [...voted];
		cpy[selected] += 1;
		setVoted(cpy);
	};
	//Display
	return (
		<div>
			<Header h2="Anecdote of the day" />
			<GeneralAnecdote anecdote={anecdotes[selected]} />
			<Button value="vote" onClick={onVote} />
			<Button value="next anecdote" onClick={onGenerate} />
			<Header h2="Anecdote with most votes" />
			<PopularAnecdote anecdote={anecdotes} voted={voted} />
		</div>
	);
};

export default App;
