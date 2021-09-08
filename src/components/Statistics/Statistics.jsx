import React, { useState, useEffect } from "react";
import Card from "./../../components/Card/Card";
import data from "./../../data.js";
import "./Statistics.scss";

const Statistics = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		setCards(data);
	}, []);

	return (
		<div className="stat">
			<div className="stat-header">
				<h2>Advanced Statistics</h2>

				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>

			<div className="cards">
				{cards.map((item) => (
					<Card
						key={item.id}
						header={item.header}
						paragraph={item.paragraph}
						image={item.image}
					/>
				))}
			</div>
		</div>
	);
};

export default Statistics;
