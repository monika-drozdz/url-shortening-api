import React from "react";
import "./Spinner.scss";
const Spinner = () => {
	return (
		<div className="loading-dots">
			<div className="bounce"></div>
			<div className="bounce2"></div>
			<div className="bounce3"></div>
		</div>
	);
};

export default Spinner;
