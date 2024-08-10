// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
import Sidebar from './components/Sibebar';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app">
        <div className="main">
          {isAuthenticated && <Sidebar />}
          <div className="content">
            <Routes>
              <Route 
                path="/" 
                element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/home" />} 
              />
              <Route 
                path="/home" 
                element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
              />
              <Route 
                path="/users" 
                element={isAuthenticated ? <Users /> : <Navigate to="/" />} 
              />
              <Route 
                path="/posts" 
                element={isAuthenticated ? <Posts /> : <Navigate to="/" />} 
              />
              <Route 
                path="*" 
                element={<NotFound />} 
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
