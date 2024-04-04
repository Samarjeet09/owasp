import React from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <div className="navbar-left">
          <div className="menu-icon" onClick={toggle}>
            <FaBars />
          </div>
        </div>
        <div className="patient-info">
          <span className="patient-name">Rinku Singh</span>
        </div>
        <div className="rehab-info">
          <div className="logoWithName">
            <img src="src/assets/logo.png" alt="NirogSampada logo" />
            <span>NirogSampada</span>
          </div>
        </div>
        <div className="person-info">
          {/* <MdPerson /> */}
          <span><b>Gautam Gambhir</b></span>
        </div>
        <div className="circle-icon">
          {/* <MdPerson /> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar