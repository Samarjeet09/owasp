import { useState } from 'react'

// import Header from './Header'
// import Sidebar from './Sidebar'
import Dashboard from './Dashboard/Dashboard'
import AppointmentPage from './Appointment/appointment';
import UserState from './context/users/userState'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Form,
} from "react-router-dom";
import AddUserDetails from './AddUserDetails/AddUserDetails'
import LandingPage from './LandingPage/LandingPage'
import Admin from './Admin/Admin'
import Navbar from './Navbar/Navbar'
import Caretaker from './Caretaker/Caretaker';
import Guardian from './Guardian/Guardian';

import Alerts from './Alerts/Alerts'
import Login from './Login/Login';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <UserState>
      <Router>
        <div className='container'>
          {/* <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
          <Routes>
            <Route path='/' element={<LandingPage />}> </Route>
            <Route path='/appointment' element={<AppointmentPage />}></Route>
            <Route path='/signIn' element={<Login/>}/>

            <Route path='/dashboard' element={<Dashboard />}> </Route>

            <Route path='/caretaker' element={<Caretaker />}></Route>
            <Route path='/alerts' element={<Alerts />}></Route>
            <Route path='/reports' element={<AddUserDetails />}></Route>

            <Route path='/admin' element={<Admin />}></Route>

            <Route path='/guardian' element={<Guardian />}></Route>
            <Route path='/guardianReports' element={<Dashboard />}></Route>
            <Route path='/contactGuardian' element={<Form />}></Route>


            {/* <Route path='/addReport' element={<AddUserDetails />}></Route> */}
          </Routes>
        </div>
      </Router>
    </UserState>
  )
}

export default App
