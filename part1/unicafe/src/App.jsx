import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = ({ value, count, per }) => (
	<p>
		{value}: {count} {per}
	</p>
);

const AllStatistics = ({ good, bad, neutral, avarage, positive }) => {
	if (good + bad + neutral > 0) {
		return (
			<>
				<Statistics value="good" count={good} />
				<Statistics value="neutral" count={neutral} />
				<Statistics value="bad" count={bad} />
				<Statistics value="avarage" count={avarage} />
				<Statistics value="positive" count={positive} per="%" />
			</>
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
			<AllStatistics
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
