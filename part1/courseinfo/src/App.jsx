const Header = p => <h1>{p.course}</h1>;
const Part = p => <p>{p.namePart} {p.numExe}</p>
const Content = p => (
	<>
		<Part namePart={p.parts[0].name} numExe={p.parts[0].exercises} />
		<Part namePart={p.parts[1].name} numExe={p.parts[1].exercises} />
		<Part namePart={p.parts[2].name} numExe={p.parts[2].exercises} />
	</>
);
const Total = p => (
	<p>
		Number of exercises{' '}
		{
			p.parts[0].exercises +
			p.parts[1].exercises +
			p.parts[2].exercises
		}
	</p>
);

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using p to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];
	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
