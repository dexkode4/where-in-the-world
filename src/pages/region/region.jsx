import React, { useEffect, useState } from "react";
import Country from "../../components/card/country-card.component";
import axios from "axios";
import { withRouter, useHistory } from "react-router-dom";
import { Dropdown, Grid } from "semantic-ui-react";

const options = [
	{ key: 1, text: "Africa", value: "Africa" },
	{ key: 2, text: "Americas", value: "Americas" },
	{ key: 3, text: "Asia", value: "Asia" },
	{ key: 4, text: "Europe", value: "Europe" },
	{ key: 5, text: "Oceania", value: "Oceania" },
];

function Region({ match, history }) {
	// const history = useHistory();
	const { region } = match.params;
	const [countries, setCountries] = useState([]);
	const [value, setValue] = useState();

	const URL = `https://restcountries.eu/rest/v2/region/${region}`;

	const handleChange2 = (e, { value }) => {
		setValue({ value });
		console.log(value);
		history.push(`/region/${region}`);
	};

	useEffect(() => {
		axios.get(URL).then(res => {
			setCountries(res.data);
		});
	});

	return (
		<div>
			<h1>Region :{region}</h1>
			<div>
				<Grid columns={2}>
					<Grid.Column>
						<Dropdown
							onChange={handleChange2}
							options={options}
							placeholder="Choose a region"
							selection
							value={value}
						/>
					</Grid.Column>
				</Grid>
			</div>
			<div className="directory-menu-list">
				{countries.map(country => (
					<p>{country.name}</p>
				))}
			</div>
		</div>
	);
}

export default withRouter(Region);
