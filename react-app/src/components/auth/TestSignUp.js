import React from 'react'
import LoginFormModal from './LoginFormModal';
import "./SignUpFormModal/SignUpForm.css"
import SignUpFormModal from './SignUpFormModal';
import './Unauthenticated.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


function UnauthenticatedUser() {

  const sessionUser = useSelector((state) => state.session?.user)

    if(sessionUser) {
      return <Redirect to='/' />;
    }

    return (
      <div className='main-unauthenticated-div'>
          <h2 className='main-unauthenticated-h2'>Please Login or Sign Up Below to Continue</h2>
          <div className='main-unauthenticated-auths'>
            <LoginFormModal />
            <p className='main-unauthenticated-p'>OR</p>
            <SignUpFormModal />
          </div>
      </div>
    );
  }

  export default UnauthenticatedUser;
