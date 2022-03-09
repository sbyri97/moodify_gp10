import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'
import { FaPlay } from "react-icons/fa";


export default function SongSearch() {

    const songs = useSelector((state) => state.library.library.songs)

    return (
        <div>
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
        </div>
    )
}
