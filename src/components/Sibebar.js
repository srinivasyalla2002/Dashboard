//Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
