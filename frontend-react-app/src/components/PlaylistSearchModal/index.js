import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import PSearch from './playlistSearch';


function PlayListSearchModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className='playlist-search-modal'>
        <button className='playlist-add-song-btn' onClick={() => setShowModal(true)}>Add a song</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PSearch className='Modal'/>
          </Modal>
        )}
      </div>
    );
  }

  export default PlayListSearchModal;
