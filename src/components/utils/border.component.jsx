import React, { useEffect, useState } from "react";
import { withRouter,Link } from "react-router-dom";

// class Border extends React.Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			borderCountryName: "",
// 		};
// 	}
// 	// history.push(`${match.url}${name}`)
// 	async componentDidMount() {
// 		const URL = `https://restcountries.eu/rest/v2/alpha/${this.props.code}`;
// 		const response = await fetch(URL);
// 		const json = await response.json();
// 		this.setState({ borderCountryName: json.name, isLoaded: true });
// 	}
// 	render() {
// 		const { borderCountryName } = this.state;
// 		return (
// 			<div
// 				className = "borderCountry"
// 				onClick={() =>  console.log(this.match,borderCountryName)
// 					// (this.history.push(`${this.match.url}${borderCountryName}`) )
// 				}

// 				// onClick={() => {
// 				// 	window.location = `/${borderCountryName}`;
// 				// }}

// 			>
// 				{borderCountryName}
// 			</div>
// 		);
// 	}
// }
// onClick = {history.push(`${match.url}${country}`)}

function Border({history,code,match}) {
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
		<div className="border_country btn"
			onClick={() => {
				window.location = `/${country}`;
			}}
		>
			{country}
		</div>
		// <Link to={`/${country}`}><li>{country}</li></Link>
	);
}

export default withRouter(Border);
