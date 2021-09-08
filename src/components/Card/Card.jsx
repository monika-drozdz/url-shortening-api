import React from "react";

import "./Card.scss";

const Card = (props) => {
	return (
		<div className="card" id={props.id}>
			<div className="icons">
				<img src={props.image} alt="logo" />
			</div>
			<h3>{props.header}</h3>
			<p>{props.paragraph}</p>
		</div>
	);
};

export default Card;
