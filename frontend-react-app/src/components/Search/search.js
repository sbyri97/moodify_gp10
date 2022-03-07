import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryReducer from '../../store/library'


export default function MainSearch() {

    const songs = useSelector((state) => state.libraryReducer.library.songs)


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
        <div>
            <div>
                <form>
                    <input
                    text='text'
                    placeholder="search for songs"
                    value={songsSearch}
                    onChange={search}
                    />
                    <button onClick={onSearchSubmit}>Search</button>
                </form>
            </div>
            <div>The results of search over here:
                <ul>
                    {songs?.map((song) =>
                        <li key={song.song_url}>{song.song_title}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
