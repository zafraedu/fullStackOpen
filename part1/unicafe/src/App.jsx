import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => {
	if (text === "positive") {
		return (
			<tr>
				<td>{text}:</td>
				<td>{value}%</td>
			</tr>
		);
	} else {
		return (
			<tr>
				<td>{text}:</td>
				<td>{value}</td>
			</tr>
		);
	}
};

const Statistics = ({ good, bad, neutral, avarage, positive }) => {
	if (good + bad + neutral > 0) {
		return (
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="avarage" value={avarage} />
					<StatisticLine text="positive" value={positive} />
				</tbody>
			</table>
		);
	} else {
		return <h4>No feedback given</h4>;
	}
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const avarage = () => (good + neutral + bad) / 3;
	const positive = () => (good === 0 ? 0 : (good / (good + neutral + bad)) * 100);

	return (
		<div>
			<h2>give feedback</h2>
			<Button onClick={() => setGood(good + 1)} text="good" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button onClick={() => setBad(bad + 1)} text="bad" />
			<h2>statistics</h2>
			<Statistics
				good={good}
				bad={bad}
				neutral={neutral}
				avarage={avarage().toFixed(2)}
				positive={positive().toFixed(2)}
			/>
		</div>
	);
};

export default App;
