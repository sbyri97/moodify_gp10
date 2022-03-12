import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'
import { getLibrary } from "../../store/library";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function SongSearch() {
    const dispatch = useDispatch()

    const playSong = (id, e) => {
        e.stopPropagation();
        const numId = Number(id);
        dispatch(getLibrary(numId));
      };

    const songs = useSelector((state) => state?.library?.itemLibrary?.songs)

    return (
        <div>
            {(songs?.length >= 1) ?
            <div className="songsResultsMainHead">
                <div className="songResultsTitleContainer">
                    <h2 className="songResultTitleText">Songs</h2>
                </div>
                <div className="playlist-detail-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="playlist-detail-table-header-play"></th>
                                <th className="playlist-detail-table-header-image"></th>
                                <th className="playlist-detail-table-header">SONG</th>
                                <th className="playlist-detail-table-header">ALBUM</th>
                                <th className="playlist-detail-table-header">ARTIST</th>
                            </tr>
                            <tr className="playlist-detail-top-border"></tr>
                        </thead>
                        <tbody>
                            {songs?.map((song, i) =>
                                <tr className="playlist-detail-table-row" key={i}>
                                    <td>
                                        <button onClick={(e) => playSong(song?.id, e)}
                                                className="playlist-playPause">
                                            <FaPlay className="play" />
                                        </button>
                                    </td>
                                    <td className="playlist-song-img-container">
                                        <img src={song?.album_coverart_url} alt="album_cover"/>
                                    </td>
                                    <td className="playlist-detail-grey-text">{song?.song_title}</td>
                                    <td className="playlist-detail-grey-text">
                                        <NavLink
                                            to={`/albums/${song?.album_name}`}
                                            className="no-text-dec"
                                        > {song?.album_name}
                                        </NavLink>
                                        </td>
                                    <td className="playlist-detail-grey-text">
                                        <NavLink
                                            to={`/artists/${song?.artist_name}`}
                                            className="no-text-dec"
                                        > {song?.artist_name}
                                        </NavLink>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            : null}
        </div>
    )
}
