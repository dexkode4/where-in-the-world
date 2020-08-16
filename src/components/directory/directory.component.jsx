import React from "react";
import Country from "../card/country-card.component";
import AOS from "aos";

import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [],
		};
	}

	async componentDidMount() {
		const response = await fetch("https://restcountries.eu/rest/v2/all");
		const json = await response.json();
		this.setState({ data: json });
		console.log(json);
	}

	render() {
		return (
			<div className="directory-menu" data-aos={"fade-left"}>
				{this.state.data.map(({ cioc, ...otherProps }) => (
					<Country key={cioc} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Directory;
