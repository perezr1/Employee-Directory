import React, { useContext } from "react";
import DataBody from "./Body";
import "../styles/SearchTable.css";
import SearchContext from "../utils/SearchContext";

const SearchTable = () => {
  const context = useContext(SearchContext);

  return (
    <div className="mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
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

        <DataBody />
      </table>
    </div>
  );
};

export default SearchTable;
