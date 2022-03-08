import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryReducer from '../../store/library'
import './search.css'


export default function MainSearch() {

    const songs = useSelector((state) => state.libraryReducer.library.songs)
    const artists = useSelector((state) => state.libraryReducer.artistLibrary?.artists)


    const [songsSearch, setSongSearch] = useState("")
    const dispatch = useDispatch();

    const search = (e) => {
        e.preventDefault();
        setSongSearch(e.target.value)
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        return dispatch(libraryReducer.searchAllSongs(songsSearch))
        // This return needs to go to a thunk which needs to send the data to the backend to query
    }

    return (
        <div className='searchFullPage'>
            <div className="searchFormContainer">
                <form>
                    <input
                    text='text'
                    placeholder="search for songs or artist"
                    value={songsSearch}
                    onChange={search}
                    />
                    <button onClick={onSearchSubmit}>Search</button>
                </form>
            </div>
            <div className="resultsMainContainer">
                <div className="songResultsTitleContainer">
                    <h2 className="songResultTitleText">Songs</h2>
                </div>
                {songs?.map((song) =>
                    <div key={song.song_url}>
                        <div className="songResultsMainContainer">
                            <div className="songResultsDetailContainer">
                                <div className="songResultsImageContainer">
                                    <img src={song.album_coverart_url} alt="album_cover" className="songResultsImage"/>
                                </div>
                                <div className="songResultsNameContainer">
                                    <h3>{song.song_title}</h3>
                                </div>
                                <div className="songResultsArtistContainer">
                                    <h3>{song.artist_name}</h3>
                                </div>
                                <div className="songResultsAddToPlaylist">Add Song</div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="songResultsTitleContainer">
                    <h2 className="songResultTitleText">Artists</h2>
                </div>
                {artists?.map((artist) =>
                    <div key={artist.song_url}>
                        <div className="songResultsMainContainer">
                            <div className="songResultsDetailContainer">
                                <div className="songResultsImageContainer">
                                    <img src={artist.album_coverart_url} alt="album_cover" className="songResultsImage"/>
                                </div>
                                <div className="songResultsNameContainer">
                                    <h3>{artist.song_title}</h3>
                                </div>
                                <div className="songResultsArtistContainer">
                                    <h3>{artist.artist_name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
