import React from "react";
import Country from "../card/country-card.component";
import { FilterAll } from "../filter/filter.component";
import { withRouter } from "react-router-dom";
import "./directory.styles.scss";
import { Dropdown, Grid } from "semantic-ui-react";
import { AtomSpinner } from 'react-epic-spinners';

const options = [
	{ key: 1, text: "All", value: "" },
	{ key: 2, text: "Africa", value: "Africa" },
	{ key: 3, text: "Americas", value: "Americas" },
	{ key: 4, text: "Asia", value: "Asia" },
	{ key: 5, text: "Europe", value: "Europe" },
	{ key: 6, text: "Oceania", value: "Oceania" },
];

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false,
			data: [],
			searchField: "",
			value: "",
		};
	}
	handleChange2 = (e, { value }) => {
		this.setState({ value });
		console.log(value);
	};

	handleChange = e => this.setState({ searchField: e.target.value });
	async componentDidMount() {
		const URL = "https://restcountries.eu/rest/v2/all";
		const response = await fetch(URL);
		const json = await response.json();
		this.setState({ data: json, isLoaded: true });
	}

	render() {
		const { data, isLoaded, searchField, value } = this.state;
		const filteredCountries = data.filter(country => {
			if (searchField !== "")
				return country.name.toLowerCase().includes(searchField.toLowerCase());
			else return country.region.toLowerCase().includes(value.toLowerCase());
		});

		if (!isLoaded) {
			return (
				<div className="loading">
					<AtomSpinner size={100} color="#7f8c8d" />
				</div>
			);
		}

		return (
			<div>
				<div className="directory-menu">
					<div className="directory-menu-filter">
						<FilterAll
							placeholder="Search for a country"
							handleChange={this.handleChange}
						/>
						<div className="directory-menu-filter-region">
							<Grid columns={2} className="filterRegion">
								<Grid.Column>
									<Dropdown
										onChange={this.handleChange2}
										options={options}
										placeholder="Filter by region"
										selection
										value={this.state.value}
									/>
								</Grid.Column>
							</Grid>
						</div>
					</div>

					<div className="directory-menu-list">
						{filteredCountries.map(({ numericCode, ...otherProps }) => (
							<Country key={numericCode} {...otherProps} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Directory);
