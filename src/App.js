import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router> {/* Home Page */}
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<Home />} />
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