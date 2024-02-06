const Course = ({ course }) => {
	console.log(course);
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<TotalSum parts={course.parts} />
		</>
	);
};

const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => parts.map((e) => <Part key={e.id} part={e} />);

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const TotalSum = ({ parts }) => {
	const res = parts.reduce((prev, curr) => prev + curr.exercises, 0);
	return <h3>total of {res} exercises</h3>;
};

export default Course;
