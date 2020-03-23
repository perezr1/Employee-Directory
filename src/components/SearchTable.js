import React, { useContext } from "react";
import Body from "./Body";
import SearchContext from "../utils/SearchContext";
import "../styles/SearchTable.css";

const SearchTable = () => {
  const context = useContext(SearchContext);

  return (
    <div className=" SearchTable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="SearchTable col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );    
            })}
          </tr>
        </thead>

        <Body />
      </table>
    </div>
  );
};

export default SearchTable;
