import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPlaylists } from '../../store/playlist';
// import NewPlaylistForm from '../Playlist/NewPlaylist';
import PlaylistFormModal from '../Playlist';
import './sidebar.css';


const SideBar = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session?.user?.id);

    const playlistsObj = useSelector(state => state.playlist?.playlists);

    // TO DO: change to modal
    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getPlaylists())
    }, [dispatch])

    const playlists = Object.values(playlistsObj).filter(playlist => playlist?.user_id === userId)

    // TO DO: change to modal
    const showNewPlaylistForm = (e) => {
        setRenderForm(true);
    }

    return (
    <div className='sidebar'>
        <div className='sidebar-upper'>
            <div className='sidebar-logo'>
                Moodify
            </div>
            <ul className='sidebar-ul'>
                <li className='sidebar-li'>
                    <NavLink to='/' exact={true} className='sidebar-navlink-home'>
                        <i className='fa-solid fa-house'></i>
                        <p className='sidebar-navlink-text'>Home</p>
                    </NavLink>
                </li>
                <li className='sidebar-li'>
                    <NavLink to='/search' exact={true} className='sidebar-navlink-search'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <p className='sidebar-navlink-text'>Search</p>
                    </NavLink>
                </li>
            </ul>
            <div className='sidebar-playlists-div'>
                <div className='sidebar-playlist-button-div'>
                    <PlaylistFormModal />
                </div>
            </div>
            <div className='sidebar-line'></div>
        </div>
        <div className='sidebar-lower'>
            <div className='sidebar-playlists'>
                <ul className='sidebar-playlists-ul'>
                    {playlists.map((playlist, i) => (
                        <li className='sidebar-playlist-li' key={`${i}`}>
                            <NavLink className='sidebar-navlink-playlist'exact={true} to={`/playlists/${playlist.id}`}>
                            {playlist.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default SideBar;
