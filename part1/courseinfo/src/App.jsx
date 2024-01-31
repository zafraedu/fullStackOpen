const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => {
	return (
		<p>
			{props.namePart} {props.numExe}
		</p>
	);
};

const Content = () => {
	return (
		<>
			<Part namePart="Fundamentals of React" numExe="10" />
			<Part namePart="Using props to pass data" numExe="7" />
			<Part namePart="State of a component" numExe="14" />
		</>
	);
};
const Total = (props) => <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>;

const App = () => (
	<div>
		<Header course="Half Stack application development" />
		<Content />
		<Total n1={10} n2={7} n3={14} />
	</div>
);

export default App;
