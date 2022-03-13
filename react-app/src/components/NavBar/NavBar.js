import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle, FaCaretDown, FaCaretUp, FaRegIdCard } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginFormModal from '../auth/LoginFormModal';
import DemoUser from './demouser'
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user)

  const [yesDrpDwn, setYesDrpDown] = useState(false)

  return (
    <nav className='main-navbar-container'>
      {(!sessionUser) ?
          <div className='main-navbar-logout-items-container'>
            <div className='navbar-demo-container'>
              <NavLink to='/about' id='demo-btn'>
                <div className='abt-btn'>
                  ABOUT US
                </div>
              </NavLink>
            </div>
            <div className='navbar-line'></div>
            <div className='navbar-demo-container'>
                <div className='demo-btn'>
                  <DemoUser />
                </div>
            </div>
            <div className='navbar-line'></div>
            <div className='navbar-signup-login-container'>
              <div className='navbar-signup'>
                <div className='signup-btn'>
                  <SignUpFormModal />
                </div>
              </div>
              <div className='navbar-login'>
                <div className='login-btn'>
                  <LoginFormModal />
                </div>
              </div>
            </div>
          </div>
      :
      <div className='navbar-login-btn-container'>
          <button className='navbar-login-btn' onClick={(e)=> setYesDrpDown(!yesDrpDwn)}>
          {/* // need to have a state with onclick changing that state */}
            <div className='navbar-btn-div'>
              <div className='navbar-user-div'>
                <FaUserCircle />
              </div>
              <div className='navbar-username-container'>
                {sessionUser.first_name} {sessionUser.last_name}
              </div>
              {(!yesDrpDwn ?
              <div className='navbar-drpdwn-btn'>
                <FaCaretDown />
              </div>
              :
              <div className='navbar-drpdwn-btn'>
              <FaCaretUp />
              </div>
              )}
            </div>
          </button>
          {yesDrpDwn && (
            <div className='navbar-menu-div'>
              <div className='navbar-menu-profile-btn'>
                <NavLink to={`/users/${sessionUser.id}`} exact={true} className='navbar-user-btn'>
                  <h3 className='navbar-profile-head'>Profile</h3>
                  <FaRegIdCard />
                </NavLink>
              </div>
              <div className='navbar-menu-logout-btn'>
                <LogoutButton />
              </div>
            </div>
          )}
      </div>
    }
    </nav>
  );
}

export default NavBar;
