const CompleteCountrie = (props) => {
	const arrayLanguages = Object.values(props.languages);
	return (
		<>
			<h1>{props.name}</h1>
			<p>capital {props.capital}</p>
			<p>area {props.area}</p>
			<h2>languages:</h2>
			<ul>
				{arrayLanguages.map((e) => (
					<li key={e}>{e}</li>
				))}
			</ul>
			<img src={props.flag.png} alt={props.flag.alt} />
		</>
	);
};

export default CompleteCountrie;
