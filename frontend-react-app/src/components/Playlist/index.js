import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewPlaylistForm from './NewPlaylist';

function PlaylistFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='playlistFormModal'>
            <button className='createPlaylistButton' onClick={() => setShowModal(true)}>Create New Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewPlaylistForm className='Modal'/>
                </Modal>
            )}
        </div>
    )
}

export default PlaylistFormModal;
