import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import * as libraryActions from '../../store/library'
import '../Playlist/Playlist.css'
import './search.css'
import { FaPlay } from "react-icons/fa";


export default function MainSearch() {

    const songs = useSelector((state) => state.library.library.songs)
    const artists = useSelector((state) => state.library.library.artists)
    const albums = useSelector((state) => state.library.library.albums)
    const users = useSelector((state) => state.library.library.users)


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
                {(songs?.length >= 1) ?
                <div className="songsResultsMainHead">
                    <div className="songResultsTitleContainer">
                        <h2 className="songResultTitleText">Songs</h2>
                    </div>
                    <div className="playlist-detail-table-container">
                        <table>
                            <tr>
                                <th className="playlist-detail-table-header-play"></th>
                                <th className="playlist-detail-table-header-image"></th>
                                <th className="playlist-detail-table-header">SONG</th>
                                <th className="playlist-detail-table-header">ALBUM</th>
                                <th className="playlist-detail-table-header">ARTIST</th>
                            </tr>
                            <tr className="playlist-detail-top-border"></tr>
                            {songs?.map((song) =>
                                <tr className="playlist-detail-table-row" key={song.song_url}>
                                    <td>
                                        <button className="playlist-playPause">
                                            <FaPlay className="play" />
                                        </button>
                                    </td>
                                    <td className="playlist-song-img-container">
                                        <img src={song.album_coverart_url} alt="album_cover"/>
                                    </td>
                                    <td>{song.song_title}</td>
                                    <td className="playlist-detail-grey-text">{song.album_name}</td>
                                    <td className="playlist-detail-grey-text">{song.artist_name}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
                : null}
                {(albums?.length >= 1) ?
                    <div className="songsResultsMainHead">
                        <div className="songResultsTitleContainer">
                            <h2 className="songResultTitleText">Albums</h2>
                        </div>
                        <div className="playlist-detail-table-container">
                            <table>
                                <tr>
                                    <th className="playlist-detail-table-header-play"></th>
                                    <th className="playlist-detail-table-header-image"></th>
                                    <th className="playlist-detail-table-header">ALBUM</th>
                                    <th className="playlist-detail-table-header"></th>
                                    <th className="playlist-detail-table-header">ARTIST</th>
                                </tr>
                                <tr className="playlist-detail-top-border"></tr>
                                {albums?.map((album) =>
                                    <tr className="playlist-detail-table-row" key={album.song_url}>
                                        <td>
                                        </td>
                                        <td className="playlist-song-img-container">
                                            <img src={album.album_coverart_url} alt="album_cover"/>
                                        </td>
                                        <td>{album.album_name}</td>
                                        <td className="playlist-detail-grey-text"></td>
                                        <td className="playlist-detail-grey-text">{album.artist_name}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                    : null}
                    {(artists?.length >= 1) ?
                        <div className="songsResultsMainHead">
                            <div className="songResultsTitleContainer">
                                <h2 className="songResultTitleText">Artists</h2>
                            </div>
                            <div className="playlist-detail-table-container">
                                <table>
                                    <tr>
                                        <th className="playlist-detail-table-header-play"></th>
                                        <th className="playlist-detail-table-header-image"></th>
                                        <th className="playlist-detail-table-header">ARTIST</th>
                                        <th className="playlist-detail-table-header"></th>
                                        <th className="playlist-detail-table-header"></th>
                                    </tr>
                                    <tr className="playlist-detail-top-border"></tr>
                                    {artists?.map((artist) =>
                                        <tr className="playlist-detail-table-row">
                                            <td>
                                            </td>
                                            <td className="playlist-song-img-container">
                                                <img src={artist.album_coverart_url} alt="album_cover"/>
                                            </td>
                                            <td>{artist.artist_name}</td>
                                            <td className="playlist-detail-grey-text"></td>
                                            <td className="playlist-detail-grey-text"></td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                        </div>
                    : null}
                    {(users?.length >= 1) ?
                        <div className="songsResultsMainHead">
                            <div className="songResultsTitleContainer">
                                <h2 className="songResultTitleText">Users</h2>
                            </div>
                            <div className="playlist-detail-table-container">
                                <table>
                                    <tr>
                                        <th className="playlist-detail-table-header-play"></th>
                                        <th className="playlist-detail-table-header-image"></th>
                                        <th className="playlist-detail-table-header">USER</th>
                                        <th className="playlist-detail-table-header"></th>
                                        <th className="playlist-detail-table-header"></th>
                                    </tr>
                                    <tr className="playlist-detail-top-border"></tr>
                                    {users?.map((user) =>
                                        <tr className="playlist-detail-table-row">
                                            <td>
                                            </td>
                                            <td className="playlist-song-img-container">
                                                <i className="fa-solid fa-user"></i>
                                            </td>
                                            <td>{user.username}</td>
                                            <td className="playlist-detail-grey-text"></td>
                                            <td className="playlist-detail-grey-text"></td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                        </div>
                    : null}
                {(results) ? null :
                    ((!songs?.length) && (!artists?.length) && (!albums?.length) && (!users?.length)) ?
                    <div>
                        <h2>No Results Found</h2>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
