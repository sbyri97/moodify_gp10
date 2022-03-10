import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'


export default function ArtistSearch() {

    const artists = useSelector((state) => state.library.library.artists)

    return (
        <div>
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
        </div>
    )
}
