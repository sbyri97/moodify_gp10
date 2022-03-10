import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
// import "../Navigation/Navigation.css"
// import "./LoginForm.css"
import PSearch from './playlistSearch';


function PlayListSearchModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className='loginDiv'>
        <button className='loginButton' onClick={() => setShowModal(true)}>Add a song</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PSearch className='Modal'/>
          </Modal>
        )}
      </div>
    );
  }

  export default PlayListSearchModal;
