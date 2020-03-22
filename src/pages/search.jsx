import React, { Component } from "react";
import "./search.css";

class search extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <h1 className="display-3 text-center text-white">
            Employee Directory
          </h1>
          <p className="text-center text-white">
            Click on carrots to filter by headins or choose the search box to
            narrow your result.
          </p>
        </div>
      </div>
    );
  }
}

export default search;
