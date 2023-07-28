// SearchBox.js
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm, searchDoctors } from "../redux/actions";

const SearchBox = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDoctors(searchTerm));
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for doctors"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox; 
