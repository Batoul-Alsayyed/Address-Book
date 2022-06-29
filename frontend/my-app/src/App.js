import "./App.css";
import React from "react";
import { Header } from './components/common'

import Login from "./components/common/login/Login";
import Register from "./components/common/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/common/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
