import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { MdPerson } from 'react-icons/md'
import './Admin.css';
import Box from '../Box/Box.jsx';
import { FaUser } from 'react-icons/fa';
import DataBox from '../DataBox/DataBox.jsx';



const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="admin">

        <Sidebar isOpen={isOpen} toggle={toggle} />

        <nav className="navbar">
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

        <div className='box'><Box /></div>

        <div className='databox'>
          <DataBox name={'Patients'} />
          <DataBox name={'Appointments'} />

        </div>

      </div>

    </>
  );
};

export default Admin;