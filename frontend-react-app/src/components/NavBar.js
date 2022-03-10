
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './auth/SignUpFormModal';
import LoginFormModal from './auth/LoginFormModal';
import DemoUser from './NavBar/demouser'
import './NavBar/navbar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
          <LoginFormModal />
        </li>
        <li>
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
          <SignUpFormModal />
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
      </ul>
    </nav>
  );
}

export default NavBar;
