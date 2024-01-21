import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
      </div>
      <Routes>
      
      </Routes>
    </Router>
  );
}

export default App;
