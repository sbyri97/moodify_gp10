import React from 'react'
import LoginFormModal from './LoginFormModal';
import "./SignUpFormModal/SignUpForm.css"
import SignUpFormModal from './SignUpFormModal';
import './Unauthenticated.css'


function UnauthenticatedUser() {

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
