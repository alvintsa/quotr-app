import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./frontend/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./frontend/pages/user/Register";
import Leaderboard from "./frontend/pages/leaderboard/Leaderboard";
import Submission from "./frontend/pages/quotes/Submission";
import Profile from "./frontend/pages/user/Profile";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="App">
        {data && (
          <div>
            Data: {JSON.stringify(data)}
          </div>
        )}
        {!data && (
          <div>
            Loading...
          </div>
        )}
      </div>

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