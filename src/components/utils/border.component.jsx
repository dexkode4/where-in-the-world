import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function Border({ history, code, match }) {
	const [country, setCountry] = useState("");
	useEffect(() => {
		const getData = async () => {
			const URL = `https://restcountries.eu/rest/v2/alpha/${code}`;
			const response = await fetch(URL);
			const json = await response.json();
			setCountry(json.name);
		};
		getData();
	});
	return (
		<div
			className="border_country btn"
			onClick={() => {
				window.location = `/${country}`;
			}}
		>
			{country}
		</div>
	);
}

export default withRouter(Border);
