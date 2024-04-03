import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>NirogSampada</h3>
        <button onClick={toggle}><FaTimes /></button>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Inbox</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;