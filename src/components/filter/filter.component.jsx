import React from 'react'

export const FilterAll = ({ placeholder, handleChange }) => (
    <input
      className="searchByName"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );


// export const FilterByRegion = 