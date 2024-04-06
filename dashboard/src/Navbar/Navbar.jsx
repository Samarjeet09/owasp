import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { useState } from 'react'
import userContext from '../context/users/userContext.jsx'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(userContext);
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
          <span className="patient-name">{user['name']}</span>
        </div>
        <div className="rehab-info">
          <div className="logoWithName">
            <img src="src/assets/logo.png" alt="NirogSampada logo" />
            <span>NirogSampada</span>
          </div>
        </div>
        <div className="person-info">
          {/* <MdPerson /> */}
          <span><b>{user['id']}</b></span>
        </div>
        <div className="circle-icon">
          {/* <MdPerson /> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar