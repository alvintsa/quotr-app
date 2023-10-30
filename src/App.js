import React from "react";
import './App.css';
import Navbar from "./frontend/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./frontend/pages/user/Register";
import Leaderboard from "./frontend/pages/leaderboard/Leaderboard";
import Submission from "./frontend/pages/quotes/Submission";
import Profile from "./frontend/pages/user/Profile";

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
          <Route path="/profile" element={<Profile />} />
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