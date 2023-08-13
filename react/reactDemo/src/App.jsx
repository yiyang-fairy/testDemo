import { useState } from "react";
import Index from "./views/Index.jsx";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" exact component={<Index />}></Route>
      </Routes> */}
      <Index></Index>
    </Router>
  );
}

export default App;
