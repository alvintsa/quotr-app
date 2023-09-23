import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Leaderboard from "./components/pages/Leaderboard";
import Submission from "./components/pages/Submission";

function App() {
  return (
    <>
      <Router> {/* Home Page */}
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/submission" element={<Submission />} />
        </Routes>
      </Router>
    </>
    // <div className="App">
    //   <h1>Yo</h1>
    //   <Navbar />
    // </div>
  );
}

export default App;