import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getPlaylists } from '../../store/playlist';
import './sidebar.css';

const SideBar = () => {
    // TO DO: add state for playlists to dynamically render an li for each playlist
    // TO DO: add on click event for create new playlist button
    // TO DO: add routing for each playlist link
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const playlistsObj = useSelector(state => state.playlist.playlists)

    useEffect(() => {
        dispatch(getPlaylists())
    }, [dispatch])

    const playlists = Object.values(playlistsObj).filter(playlist => playlist.user_id === userId)


    return (
        <div className='sidebar'>
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
                    <button className='sidebar-new-playlist'>
                    <i className='fa-solid fa-plus'></i>
                        Create New Playlist
                    </button>
                </div>
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
