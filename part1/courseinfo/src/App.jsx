const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => <p>{props.namePart} {props.numExe}</p>
const Total = (props) => <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>

const App = () =>  (
	<div>
		<Header course="Half Stack application development" />
		<Content namePart="Fundamentals of React" numExe="10" />
		<Content namePart="Using props to pass data" numExe="7" />
		<Content namePart="State of a component" numExe="14" />
		<Total n1={10} n2={7} n3={14} />
	</div>
);

export default App;
