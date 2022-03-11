import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewPlaylistForm from './NewPlaylist';
import './index.css'

function PlaylistFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='playlistFormModal'>
            <button className='createPlaylistButton' onClick={() => setShowModal(true)}>Create New Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewPlaylistForm className='Modal' closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </div>
    )
}

export default PlaylistFormModal;   
 