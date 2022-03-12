import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewPlaylistForm from './NewPlaylist';
import './index.css'

function PlaylistFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='playlistFormModal'>
            <button className='createPlaylistButton' onClick={() => setShowModal(true)}>
                <i className='fa-solid fa-square-plus'></i>
                <div className='create-new-playlist-icon-text'>Create New Playlist</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewPlaylistForm className='Modal' closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </div>
    )
}

export default PlaylistFormModal;