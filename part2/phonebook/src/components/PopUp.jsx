const PopUp = ({ message }) => {
	if (message === null) return null;
	const styleRed = {
		color: "red",
		background: "lightgrey",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};
	const styleGrn = {
		color: "green",
		background: "lightgrey",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};
	const color = message.includes("Changed") || message.includes("Added") || message.includes("Deleted");
	return (
		<div style={color ? styleGrn : styleRed} className="popUp">
			{message}
		</div>
	);
};

export default PopUp;
