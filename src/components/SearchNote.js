import React from "react";
import { MdSearch } from "react-icons/md";

const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default SearchNote;
