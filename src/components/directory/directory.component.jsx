import React from "react";
import Country from "../card/country-card.component";
import { FilterAll } from "../filter/filter.component";
import { withRouter } from "react-router-dom";
import { Link, history } from "react-router-dom";
import "./directory.styles.scss";
import { Dropdown, Grid } from "semantic-ui-react";

const options = [
	{ key: 1, text: "Africa", value: "Africa" },
	{ key: 2, text: "Americas", value: "Americas" },
	{ key: 3, text: "Asia", value: "Asia" },
	{ key: 4, text: "Europe", value: "Europe" },
	{ key: 5, text: "Oceania", value: "Oceania" },
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
		// this.props.history.replace(`region/${value}`);
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
		const { history, match } = this.props;
		const filteredCountries = data.filter(country => {
			if (searchField !== "")
				return country.name.toLowerCase().includes(searchField.toLowerCase());
			else return country.region.toLowerCase().includes(value.toLowerCase());
		});

		if (!isLoaded) {
			return (
				<div className="loading">
					<h1>Loading...</h1>
				</div>
			);
		}

		return (
			<div>
				<div className="directory-menu">
					<div className="directory-menu-filter">
						<FilterAll
							placeholder="search Country"
							handleChange={this.handleChange}
						/>
						<div>
							{/* <Link to="/region/Africa">africa</Link> */}
							<Grid columns={2}>
								<Grid.Column>
									<Dropdown
										onChange={this.handleChange2}
										options={options}
										placeholder="Choose a region"
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
