import React from "react";
import { withRouter } from "react-router-dom";


 const BackKey = ({history}) => (
    <div className = "back-key"
	onClick={() => {
		history.push('/')
	}}>
        Back
    </div>
);


export default withRouter(BackKey);
