import React from "react";
// import { withRouter } from "react-router-dom";

import "./country-card.styles.scss";

const Country = ({ name, flag, population, region, capital, cioc }) => (
	<div class="country-card">
		<div class="country-card-logo">
			<img src={flag} alt={cioc} />
		</div>

		<div class="container">
			<h4>{name}</h4>
			<p>
				{" "}
				<b>Populatiion</b> : {population}
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

export default Country;
