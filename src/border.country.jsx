import React from "react";
import { withRouter } from "react-router-dom";
import CountrySummary from "./pages/summary/countrySummary.page";
import {} from "./components/utils/border.component";

function BorderCountry() {
	return <CountrySummary />;
}

export default withRouter(BorderCountry);
