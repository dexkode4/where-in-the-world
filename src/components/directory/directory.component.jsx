import React from "react";
import Country from "../card/country-card.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoaded: false,
			data: [],
		};
	}

	async componentDidMount() {
		const URL = 'https://restcountries.eu/rest/v2/all'
		const response = await fetch(URL);
		const json = await response.json();
		this.setState({ data: json,
			isLoaded: true, });
			
	}

	render() {
		const {data,isLoaded} = this.state;
		if (!isLoaded) {
			return <div className="loading"><h1>Loading...</h1></div>;}
		return (
			<div className="directory-menu" >
				{data.map(({ numericCode, ...otherProps }) => (
					
					<Country key={numericCode} {...otherProps} /> 
					
				))}
			</div>
		);
	}
}

export default Directory;
