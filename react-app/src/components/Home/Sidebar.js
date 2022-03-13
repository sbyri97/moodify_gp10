import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPlaylists } from '../../store/playlist';
import PlaylistFormModal from '../Playlist';
import './sidebar.css';


const SideBar = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session?.user?.id);

    const playlistsObj = useSelector(state => state.playlist?.playlists);


    useEffect(() => {
        dispatch(getPlaylists())
    }, [dispatch])

    const playlists = Object.values(playlistsObj).filter(playlist => playlist?.user_id === userId)

    playlists.sort((a, b) => {
        const aId = a.id
        const bId = b.id
        return (bId - aId)
    })

    return (
    <div className='sidebar'>
        <div className='sidebar-upper'>
            <NavLink to='/' exact={true} className='sidebar-navlink-home'>
                <div className='sidebar-logo-container'>
                    <img className='sidebar-moodify-logo' src='/white-on-clear.png' alt='moodify_logo' />
                </div>
            </NavLink>
            <ul className='sidebar-ul'>
                <li className='sidebar-li'>
                    <NavLink to='/' exact={true} className='sidebar-navlink-home'>
                        <i className='fa-solid fa-house'></i>
                        <p className='sidebar-navlink-text'>Home</p>
                    </NavLink>
                </li>
                <li className='sidebar-li'>
                    {(!userId) ?
                    <NavLink to='/unauthenticatedUser' exact={true} className='sidebar-navlink-search'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <p className='sidebar-navlink-text'>Search</p>
                    </NavLink>
                    :
                    <NavLink to='/search' exact={true} className='sidebar-navlink-search'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <p className='sidebar-navlink-text'>Search</p>
                    </NavLink>
                    }

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
