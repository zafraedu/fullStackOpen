const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => {
	return (
		<p>
			{props.namePart} {props.numExe}
		</p>
	);
};

const Content = (props) => {
	console.log(props)
	return (
		<>
			<Part	namePart={props.part1.name} numExe={props.part1.exercises} />
			<Part	namePart={props.part2.name} numExe={props.part2.exercises} />
			<Part	namePart={props.part3.name} numExe={props.part3.exercises} />
		</>
	);
};
const Total = (props) => <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>;

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};
	return (
		<div>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} />
			<Total n1={part1.exercises} n2={part2.exercises} n3={part3.exercises} />
		</div>
	);
};

export default App;
