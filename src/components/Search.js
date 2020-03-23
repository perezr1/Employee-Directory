import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import "../styles/Search.css";

const Search = () => {
  const context = useContext(SearchContext);

  // This makes the search bar and links it to the data area context API
  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
          </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="Search"
          placeholder="Name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
      </div>
    </div>
  );
};
export default Search;
