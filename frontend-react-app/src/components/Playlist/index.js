import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewPlaylistForm from './NewPlaylist';

function PlaylistFormModal() {
    const [showModal, setShowModal] = useState(false)
    // const [renderForm, setRenderForm] = useState(false);

    return (
        <div className='playlistFormModal'>
            <button className='editPlaylistButton' onClick={() => setShowModal(true)}>Edit Playlist Name</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* <NewPlaylistForm hideForm={() => setRenderForm(false)}/> */}
                    <NewPlaylistForm className='Modal'/>
                </Modal>
            )}
        </div>
    )
}

export default PlaylistFormModal;
