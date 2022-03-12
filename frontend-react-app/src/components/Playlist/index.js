import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import NewPlaylistForm from './NewPlaylist';
import './index.css'

function PlaylistFormModal() {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()

    const modalunauth = (e) => {
        e.stopPropagation()
        history.push('/unauthenticatedUser')
    }

    return (
        <div className='playlistFormModal'>
            {(!sessionUser) ?
            <button className='createPlaylistButton' onClick={modalunauth}>
                <i className='fa-solid fa-square-plus'></i>
                <div className='create-new-playlist-icon-text'>Create New Playlist</div>
            </button>
            :
            <button className='createPlaylistButton' onClick={() => setShowModal(true)}>
                <i className='fa-solid fa-square-plus'></i>
                <div className='create-new-playlist-icon-text'>Create New Playlist</div>
            </button>
            }
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewPlaylistForm className='Modal' closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </div>
    )
}

export default PlaylistFormModal;
