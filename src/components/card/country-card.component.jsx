import React from "react";
import { withRouter } from "react-router-dom";
import "./country-card.styles.scss";


let countryName = '';
const Country = ({ name, flag, population, region, capital, history,match}) => (
	<div className="country-card"
	onClick={() =>{
		history.push(`${match.url}${name}`)
		countryName = name;
	}}
		>
		<div className="country-card-logo">
			<img src={flag} alt={name} />
		</div>

		<div className="container">
			<h4 className="name">{name}</h4>
			<p>
				{" "}
				<b>Populatiion</b> : {population.toLocaleString()}
			</p>
			<p>
				{" "}
				<b>Region</b> : {region}
			</p>
			<p>
				{" "}
				<b>Capital</b> : {capital}
			</p>
		</div>
	</div>
);

export default withRouter(Country);
export {countryName}
