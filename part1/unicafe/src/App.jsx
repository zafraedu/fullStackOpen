import { useState } from "react";
/*############ Components ################## */
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
	if (text === "positive") {
		return (
			<tr>
				<td>{text}:</td>
				<td>{value}%</td>
			</tr>
		);
	}
	return (
		<tr>
			<td>{text}:</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ clicks }) => {
	const total = clicks.good + clicks.neutral + clicks.bad;
	const avarage = total / 3;
	const positive = clicks.good === 0 ? 0 : (clicks.good / total) * 100;

	if (clicks.good + clicks.bad + clicks.neutral > 0) {
		return (
			<table>
				<tbody>
					<StatisticLine text="good" value={clicks.good} />
					<StatisticLine text="neutral" value={clicks.neutral} />
					<StatisticLine text="bad" value={clicks.bad} />
					<StatisticLine text="avarage" value={avarage} />
					<StatisticLine text="positive" value={positive} />
				</tbody>
			</table>
		);
	}
	return <h4>No feedback given</h4>;
};

const App = () => {
	const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
	// handle clicks
	const onGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });
	const onNeutralClick = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 });
	const onBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });
	//Display
	return (
		<div>
			<h2>give feedback</h2>
			<Button onClick={onGoodClick} text="good" />
			<Button onClick={onNeutralClick} text="neutral" />
			<Button onClick={onBadClick} text="bad" />
			<h2>statistics</h2>
			<Statistics clicks={clicks} />
		</div>
	);
};

export default App;
