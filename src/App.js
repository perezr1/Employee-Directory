import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from "./pages/index";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
        <Route path="/" component={index} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
