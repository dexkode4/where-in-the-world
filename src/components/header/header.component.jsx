import React, { useState } from "react";
import "./header.styles.scss";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// #212E37 #2B3743 color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};

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
