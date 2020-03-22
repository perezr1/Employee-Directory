import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from "./components/Pages/Main";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Route exact path="/" component={index} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
