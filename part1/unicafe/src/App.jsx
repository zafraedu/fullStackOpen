import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = ({value, count}) => <p>{value}: {count}</p>

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h2>give feedback</h2>
			<Button onClick={() => setGood(good + 1)} text="good" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button onClick={() => setBad(bad + 1)} text="bad" />
			<h2>statistics</h2>
      <Statistics value="good" count={good}/>
      <Statistics value="neutral" count={neutral}/>
      <Statistics value="bad" count={bad}/>
		</div>
	);
};

export default App;
