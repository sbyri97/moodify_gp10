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

export default function MainSearch() {

    const [itemSearch, setItemSearch] = useState("")
    const [results, setResults] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
        const delaySearch = setTimeout(() => {
            dispatch(libraryActions.searchAllItems(itemSearch))
            // Send Axios request here
          }, 500)

          return () => clearTimeout(delaySearch)
    }, [itemSearch, dispatch])

    return (
        <div className='searchFullPage'>
            <div className="searchFormContainer">
                <form>
                    <input
                    text='text'
                    placeholder="search for songs or artist"
                    value={itemSearch}
                    onChange={(e) => {
                        setItemSearch(e.target.value)
                        setResults(false)
                    }}
                    />
                </form>
            </div>
            <div className="resultsMainContainer">
                <div className="results-playlists-cards">
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                    <div className="results-playlists-outer-indiv-card">
                        <div className="results-playlists-inner-indiv-card">
                            <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img'></img>
                            <div className="results-playlist-cards-content">
                                <h2>Playlist Name</h2>
                                <h3>Artist Name</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <SongSearch />
                <AlbumSearch />
                <ArtistSearch />
                <UserSearch />
                <NoResultsSearch results={results}/>
            </div>
        </div>
    )
}
