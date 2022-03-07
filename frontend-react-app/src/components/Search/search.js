import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";


export function MainSearch() {

    const song = useSelector((state) => state.song)

    const [songsSearch, setSongSearch] = useState("")
    const dispatch = useDispatch();

    const search = (e) => {
        e.preventDefault();
        setSongSearch(e.target.value)
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        return dispatch()
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
                    <button>Search</button>
                </form>
            </div>
            <div>The results of search over here
                song
            </div>
        </div>
    )
}
