import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import CountrySummary from "./pages/summary/countrySummary.page";
import {} from "./components/utils/border.component";

function BorderCountry({ match, history }) {
	console.log(match);
	return <CountrySummary />;
}

export default withRouter(BorderCountry);
