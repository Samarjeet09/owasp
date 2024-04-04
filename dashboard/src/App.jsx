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
} from "react-router-dom";
import AddUserDetails from './AddUserDetails/AddUserDetails'
import LandingPage from './LandingPage/LandingPage'
import Admin from './Admin/Admin'
import Navbar from './Navbar/Navbar'
import Caretaker from './Caretaker/Caretaker';
import Guardian from './Guardian/Guardian';

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
            <Route path='/reports' element={<AddUserDetails/>}></Route>
            <Route path='/' element={<LandingPage />}> </Route>
            <Route path='/dashboard' element={<Dashboard />}> </Route>
            <Route path='/addReport' element={<AddUserDetails />}></Route>

            <Route path='/appointment' element={<AppointmentPage/>}></Route>

            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/caretaker' element={<Caretaker />}></Route>
            <Route path='/guardian' element={<Guardian />}></Route>

          </Routes>
        </div>
      </Router>
    </UserState>
  )
}

export default App
