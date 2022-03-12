import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryActions from '../../store/library'
import PlaylistSongSearch from "./playlistSongSearch";
import NoResultsPlaylistSearch from "./noResults";
import '../Playlist/Playlist.css'
import '../Search/search.css'

export default function PSearch() {

    const [playlistSongSearch, setPlaylistSongSearch] = useState("")
    const [results, setResults] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
        const delaySearch = setTimeout(() => {
            dispatch(libraryActions.searchAllItems(playlistSongSearch))
          }, 500)

          return () => clearTimeout(delaySearch)
    }, [playlistSongSearch])

    return (
        <div className='playlistSearchFullPage'>
            <div className="playlistSearchFormContainer">
                <form>
                    <input
                    className="playlist-search-form-input"
                    text='text'
                    placeholder="Search for songs"
                    value={playlistSongSearch}
                    onChange={(e) => {
                        setPlaylistSongSearch(e.target.value)
                        setResults(false)
                    }}
                    />
                </form>
            </div>
            <div className="playlistResultsMainContainer">
                {(!playlistSongSearch) ? null :
                <div>
                    <PlaylistSongSearch />
                    <NoResultsPlaylistSearch results={results} />
                </div>
                }
            </div>
        </div>
    )
}
