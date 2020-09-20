import React from "react";
import "./header.styles.scss";

const Header = ({ handleToggle }) => {
	return (
		<div className="header">
			<div className="header__title">Where in the world?</div>
			<div className="header__toggle" onClick={handleToggle}>
				{" "}
				<i className="far fa-moon"></i> Dark mode
			</div>
		</div>
	);
};

export default Header;
