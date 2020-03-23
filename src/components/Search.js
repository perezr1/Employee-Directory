import React, { useContext } from "react";
import "../styles/Search.css";
import DataAreaContext from "../utils/DataAreaContext";

const Search = () => {
  const context = useContext(DataAreaContext);

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
