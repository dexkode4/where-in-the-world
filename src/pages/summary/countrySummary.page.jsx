import React from "react";
import { countryName } from "../../components/card/country-card.component";

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
	// componentDidMount() {
	//     fetch("https://restcountries.eu/rest/v2/name/" + countryName )
	//       .then(res => res.json())
	//       .then(
	//         (result) => {
	//             console.log(result)
	//           this.setState({
	//             isLoaded: true,
	//             data: result
	//           });
	//         },

	//         (error) => {
	//           this.setState({
	//             isLoaded: true,
	//             error
	//           });
	//         }
	//       )
	//   }
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

		return (
			<div>
				<div className="container">
					<div className="image">
						{/* <h1>{name}</h1> */}
						<img src={data[0].flag} alt={data[0].name} />
					</div>
				</div>
			</div>
		);
	}
}

export default CountrySummary;
