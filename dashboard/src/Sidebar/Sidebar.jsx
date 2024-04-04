import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>NirogSampada</h3>
        <button onClick={toggle}><FaTimes /></button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;