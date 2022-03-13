import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryActions from '../../store/library'
import '../Playlist/Playlist.css'
import './search.css'
import SongSearch from "./songSearch";
import AlbumSearch from "./albumSearch";
import ArtistSearch from "./artistSearch";
import UserSearch from "./userSearch";
import NoResultsSearch from "./noResults";
import PreSearch from "./preSearch";

export default function MainSearch() {

    const [itemSearch, setItemSearch] = useState("")
    const [results, setResults] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
        const delaySearch = setTimeout(() => {
            dispatch(libraryActions.searchAllItems(itemSearch))
          }, 500)

          return () => clearTimeout(delaySearch)
    }, [itemSearch, dispatch])

    return (
        <div className='searchFullPage'>
            <div className="searchFormContainer">
                <form>
                    <input className="search-bar-main-search"
                    text='text'
                    placeholder="Search for songs, albums, or artists"
                    value={itemSearch}
                    onChange={(e) => {
                        setItemSearch(e.target.value)
                        setResults(false)
                    }}
                    />
                </form>
            </div>
            <div className="resultsMainContainer">
                {(!itemSearch) ? <PreSearch itemSearch={itemSearch}/> :
                <div>
                    <SongSearch />
                    <AlbumSearch />
                    <ArtistSearch />
                    <UserSearch />
                    <NoResultsSearch results={results} />
                </div>
                }
            </div>
        </div>
    )
}
