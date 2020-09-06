import React from "react";
import { withRouter } from "react-router-dom";

class Border extends React.Component {
    constructor() {
		super();

		this.state = {
			borderCountryName: '',
		};
	}

	async componentDidMount() {
		const URL = `https://restcountries.eu/rest/v2/alpha/${this.props.code}`
		const response = await fetch(URL);
		const json = await response.json();
		this.setState({ borderCountryName: json.name,
			isLoaded: true, });
	}
    render(){
        const {history,match} = this.props;
        const {borderCountryName} = this.state;
        return(
            <div
            className="borderCountry"
	onClick={() => {
		history.replace(`${match.url}${borderCountryName}`)
	}}
            >
                {borderCountryName}
            </div>
        )
    }
}


export default withRouter(Border);