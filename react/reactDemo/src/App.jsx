import { useState } from "react";
import Home from "./views/Home";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" exact component={<Index />}></Route>
      </Routes> */}
      <Home></Home>
    </Router>
  );
}

export default App;
