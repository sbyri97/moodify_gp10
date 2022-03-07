import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {

    // TO DO: add state for playlists to dynamically render an li for each playlist
    // TO DO: add on click event for create new playlist button
    // TO DO: add routing for each playlist link
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                Moodify
            </div>
            <ul className='sidebar-ul'>
                <li className='sidebar-li'>
                    <NavLink to='/' exact={true} className='sidebar-navlink'>
                        <i className='fa-solid fa-house'></i>
                        <p className='sidebar-navlink-text'>Home</p>
                    </NavLink>
                </li>
                <li className='sidebar-li'>
                    <NavLink to='/search' exact={true} className='sidebar-navlink'>
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
                        {/* this should dynamically render an li with a tag for each playlist */}
                        <li className='sidebar-playlists-li'>
                            <a>
                                Playlist 1
                            </a>
                        </li>
                        <li className='sidebar-playlists-li'>
                            <a>
                                Playlist 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
