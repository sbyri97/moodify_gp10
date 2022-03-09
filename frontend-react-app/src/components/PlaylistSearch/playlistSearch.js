import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryActions from '../../store/library'
import PlaylistSongSearch from "./playlistSongSearch";
import NoResultsSearch from "../Search/noResults"
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
        <div className='searchFullPage'>
            <div className="searchFormContainer">
                <form>
                    <input
                    text='text'
                    placeholder="search for songs or artist"
                    value={playlistSongSearch}
                    onChange={(e) => {
                        setPlaylistSongSearch(e.target.value)
                        setResults(false)
                    }}
                    />
                </form>
            </div>
            <div className="resultsMainContainer">
                {(!playlistSongSearch) ? "Search For a Song" :
                <div>
                    <PlaylistSongSearch />
                    <NoResultsSearch results={results} />
                </div>
                }
            </div>
        </div>
    )
}
