import React from "react";

export const FilterAll = ({ placeholder, handleChange }) => (
	<input
		className="directory-menu-filter-all"
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
