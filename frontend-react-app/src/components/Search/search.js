import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryReducer from '../../store/library'
import './search.css'


export default function MainSearch() {

    const songs = useSelector((state) => state.library.library.songs)
    const artists = useSelector((state) => state.library.artistLibrary.artists)
    // console.log('THIS IS ARTISTS:::::', songs);


    const [itemSearch, setItemSearch] = useState("")
    const [results, setResults] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
        const delaySearch = setTimeout(() => {
            dispatch(libraryReducer.searchAllSongs(itemSearch))
            // Send Axios request here
          }, 500)

          return () => clearTimeout(delaySearch)
    }, [itemSearch])

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
                {(songs?.length >= 1) ?
                <div className="songResultsTitleContainer">
                    <h2 className="songResultTitleText">Songs</h2>
                </div>
                : null}
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
                {(artists?.length >= 1) ?
                <div className="songResultsTitleContainer">
                    <h2 className="songResultTitleText">Artists</h2>
                </div>
                : null}
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
                {(results) ? null :
                    ((!songs?.length) && (!artists?.length)) ?
                    <div>
                        <h2>No Results Found</h2>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
