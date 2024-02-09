const InputSubmit = ({ id, event, type }) => {
	return (
		<div>
			<input id={id} onClick={event} type={type} value="add" />
		</div>
	);
};

export const InputChange = ({ textLabel, type, value, event, id }) => {
	return (
		<div>
			<label htmlFor={id}>{textLabel}</label>
			<input id={id} type={type} value={value} onChange={event} />
		</div>
	);
};

const Form = (props) => {
	return (
		<form>
			<InputChange textLabel="name: " type="text" value={props.newName} event={props.handleName} id="n-me" />
			<InputChange textLabel="nuber: " type="text" value={props.newNumber} event={props.handleNum} id="number" />
			<InputSubmit id="btnSubmit" event={props.handleSubmit} type="submit" />
		</form>
	);
};

export default Form;
