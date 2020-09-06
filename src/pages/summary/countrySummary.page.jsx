import React from "react";
import { withRouter } from "react-router-dom";
import Back from "../../components/utils/back.component";
import Border from "../../components/utils/border.component"
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
		const name =  this.props.match.params.country;
		const URL = `https://restcountries.eu/rest/v2/name/${name}`;
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
		let langs = "";
		let curr = "";
		return (
			<div>
				<div className="container">
					<Back />
					<div>
						<div className="image">
							<img src={data[0].flag} alt={data[0].name} />
						</div>
						<div className="coutry_details">
							<header className="country_details-header">{data[0].name}</header>
							<div className="country_details-body">
								<div className="country_details-body--1">
									<p>
										{" "}
										<b>Native Name:</b> {data[0].name}{" "}
									</p>
									<p>
										{" "}
										<b>Population:</b> {data[0].population}
									</p>
									<p>
										{" "}
										<b>Region:</b> {data[0].region}
									</p>
									<p>
										{" "}
										<b>Sub Region:</b> {data[0].subregion}
									</p>
									<p>
										{" "}
										<b>Capital:</b> {data[0].capital}
									</p>
								</div>
								<div className="country_details-body--2">
									<p>
										{" "}
										<b>Top Level Domain :</b> {data[0].topLevelDomain}
									</p>
									<p>
										{" "}
										<b>Currency:</b>{" "}
										{data[0].currencies.map(currency => {
											curr += `${currency.name}, `;
										})}
										{curr.slice(0, curr.length - 2)}
									</p>
									<p>
										{" "}
										<b>Languages:</b>{" "}
										{data[0].languages.map(lang => {
											langs += `${lang.name}, `;
										})}
										{langs.slice(0, langs.length - 2)}
									</p>
								</div>
							</div>
							<div className="country_details-footer">
								<b>Border Countries:</b> 
									{data[0].borders.map( border => ( <Border key={border} code={border}/> ))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CountrySummary);
