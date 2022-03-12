import React, { useState } from 'react'
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm';
import "./SignUpForm.css"


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className='signUpDiv'>
        <button className='signUpButton' onClick={() => setShowModal(true)}>SIGNUP</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignUpForm className='Modal'/>
          </Modal>
        )}
      </div>
    );
  }

  export default SignUpFormModal;
