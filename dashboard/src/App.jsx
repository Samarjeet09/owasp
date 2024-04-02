import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import UserState from './context/users/userState'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddUserDetails from './AddUserDetails'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <UserState>
      <Router>
        <div className='grid-container'>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/addReport' element={<AddUserDetails />}></Route>
          </Routes>
        </div>
      </Router>
    </UserState>
  )
}

export default App
