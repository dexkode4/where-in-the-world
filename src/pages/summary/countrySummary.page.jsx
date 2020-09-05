import React from "react";
import { countryName } from "../../components/card/country-card.component";
import Back from "../../components/utils/back.component"
class CountrySummary extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoaded: false,
			data: [],
			error: null,
		};
	}

	async componentDidMount() {
		const URL = `https://restcountries.eu/rest/v2/name/${countryName}`;
		try {
			const response = await fetch(URL);
			const json = await response.json();
			this.setState({ isLoaded: true, data: json });
		} catch (error) {
			this.setState({
				isLoaded: true,
				error,
			});
		}
	}
	
	render() {
		const { data, isLoaded, error } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		}
		if (!isLoaded) {
			return (
				<div className="loading">
					{" "}
					<h1>Loading...</h1>{" "}
				</div>
			);
		}
		let langs = '';
		let curr = '';
		return (

			<div>
				
				<div className="container">
				<Back/>
				<div>
					<div className="image">
						<img src={data[0].flag} alt={data[0].name} />
					</div>
					<div className="coutry_details">
						<header className="country_details-header">
							{data[0].name}
						</header>
						<div className="country_details-body--1">
		<p>Native Name: {data[0].name} </p>
		<p>Population: {data[0].population}</p>
		<p>Region: {data[0].region}</p>
		<p>Sub Region:{data[0].subregion}</p>
		<p>Capital:{data[0].capital}</p>

						</div>
						<div className="country_details-body--2">
		<p>Top Level Domain : {data[0].topLevelDomain}</p>
		<p>Currency:{data[0].currencies.map(
			currency => {
				curr += `${currency.name}, `;
			}
		)}
		{curr.slice(0,curr.length-2)}
		</p>
		<p>Languages: {
			data[0].languages.map(lang =>{ 
				langs += `${lang.name}, `;
				}
				)
			}
			{langs.slice(0,langs.length -2)}</p>

						</div>
					</div>
				</div>
					
				</div>
			</div>
		);
	}
}

export default CountrySummary;
