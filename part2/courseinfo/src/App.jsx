const TotalSum = ({ parts }) => {
	const res = parts.reduce((prev, curr) => prev + curr.exercises, 0);
	return <h3>total of {res} exercises</h3>;
};
const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);
const Content = ({ parts }) => parts.map((e) => <Part key={e.id} part={e} />);
const Header = ({ name }) => <h2>{name}</h2>;
const Course = ({ course }) => {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<TotalSum parts={course.parts} />
		</>
	);
};
const AllCourses = ({ allCourses }) => allCourses.map((e) => <Course key={e.id} course={e} />);
const App = () => {
	const courses = [
		{
			name: "Half Stack application development",
			id: 1,
			parts: [
				{
					name: "Fundamentals of React",
					exercises: 10,
					id: 1,
				},
				{
					name: "Using props to pass data",
					exercises: 7,
					id: 2,
				},
				{
					name: "State of a component",
					exercises: 14,
					id: 3,
				},
				{
					name: "Redux",
					exercises: 11,
					id: 4,
				},
			],
		},
		{
			name: "Node.js",
			id: 2,
			parts: [
				{
					name: "Routing",
					exercises: 3,
					id: 1,
				},
				{
					name: "Middlewares",
					exercises: 7,
					id: 2,
				},
			],
		},
	];

	return (
		<div>
			<h1>Web development curriculum</h1>
			<AllCourses allCourses={courses} />
		</div>
	);
};

export default App;
