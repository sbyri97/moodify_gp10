import React, { useEffect } from "react";
import '../Playlist/Playlist.css'
import './search.css'
import { useDispatch, useSelector } from "react-redux";
import { getRandomPlaylists } from "../../store/library";
import { NavLink } from "react-router-dom";

export default function PreSearch() {
    const dispatch = useDispatch();

    const randomPlaylists = useSelector((state) => state.library.itemLibrary.random_playlists)


    useEffect(() => {

        dispatch(getRandomPlaylists())

    }, [dispatch])


    return (
        <div className="preSearchMainContainer">
            <div>
                <h2 className="preSearchBrowsePlaylistsText">Browse Playlists</h2>
            </div>
            <div className="results-playlists-cards">
                {randomPlaylists?.map((playlist, i) =>
                <NavLink to={`/playlists/${playlist.id}`} className="results-playlists-outer-indiv-card" key={i}>
                    <div className="results-playlists-inner-indiv-card">
                        {(playlist.songs?.[0]?.album_coverart_url) ?
                        <img src={playlist.songs?.[0].album_coverart_url}
                        className='playlist-card-img' alt="playlist_album_song_note_cover" />
                        :
                        <img src={'https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/song.png'}
                        className='playlist-card-img' alt="playlist_album_song_note_cover" />
                        }
                        <div className="results-playlist-cards-content">
                            <h2 className="results-playlist-cards-text">{playlist.name}</h2>
                        </div>
                    </div>
                </NavLink>
                )}
            </div>
        </div>
    )
}
