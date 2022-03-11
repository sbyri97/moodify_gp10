
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
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
            <div className='navbar-drpdwn-btn'>
              <img className='navbar-drpdwn-img'/>
            </div>
          </div>
          {yesDrpDwn && (
            <div className='navbar-menu-div'>
              <ul className='navbar-menu-ul'>
                <li className='navbar-menu-profile-btn'>
                  PROFILE button
                </li>
                <li className='navbar-menu-logout-btn'>
                  <LogoutButton />
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    }


      {/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li> */}
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
          {/* <LoginFormModal />
        </li>
        <li> */}
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
          {/* <SignUpFormModal />
        </li>
        <li>
          <DemoUser />
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
    </nav>
  );
}

export default NavBar;
