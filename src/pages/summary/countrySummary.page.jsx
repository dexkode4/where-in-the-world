import React from "react";
import { withRouter ,Link} from "react-router-dom";
import Border from "../../components/utils/border.component"
import './countrySummary.styles.scss';
class CountrySummary extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoaded: false,
			data: [],
			error: null,
			borders:[],
			bordersCountryNames:[]
		};
	}

	async componentDidMount() {
		const name =  this.props.match.params.country;
		console.log(this.props.match);
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
		console.log(this.state.bordersCountryNames);
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
				<div className="container-summary">
					<div className="back btn"
					onClick={()=> this.props.history.push('/')}><i class="fas fa-long-arrow-alt-left"></i>  Back </div>
					<div className="summary">
						<div className="summary_flag">
							<img src={data[0].flag} alt={data[0].name} />
						</div>
						<div className="summary_details">
							<header className="summary_details-header">{data[0].name}</header>
							<div className="summary_details-body">
								<div className="summary_details-body--1">
									<p>
										{" "}
										<b>Native Name:</b> {data[0].name}{" "}
									</p>
									<p>
										{" "}
										<b>Population:</b> {data[0].population.toLocaleString()}
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
								<div className="summary_details-body--2">
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
							<div className="summary_details-footer">
								{data[0].borders.length === 0 ? null : <b>Border Countries:</b>  }
									{data[0].borders.map( border => ( <Border key={border} code={border}/> ))}
									{/* {data[0].borders.map( border => ( <div key={border}>{border}</div> ))} */}
									{/* {borderssummaryNames.map(name => <div onClick ={()=> {
										window.location = `/${name}`;
									}}>{name}</div>)} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CountrySummary);
