import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import WeeklyPage from "./components/WeeklyPage/WeeklyPage";
import './App.css';

function App() {
  
  return (
    <Router>
      {/* <div className="App">
        <LandingPage />
      </div> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/weekly" element={<WeeklyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
