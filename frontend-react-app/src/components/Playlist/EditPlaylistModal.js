import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import EditPlaylistForm from './EditPlaylist';
import './index.css'

function EditPlaylistFormModal({playlist, playlistId}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='playlistFormModal'>
            <button className='editPlaylistButton' onClick={() => setShowModal(true)}>
                <div className='edit-new-playlist-text'>Edit</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditPlaylistForm className='Modal' closeModal={() => setShowModal(false)} playlist={playlist} playlistId={playlistId}/>
                </Modal>
            )}
        </div>
    )
}

export default EditPlaylistFormModal;