import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'
import { NavLink } from "react-router-dom";


export default function AlbumSearch() {

    const albums = useSelector((state) => state.library.itemLibrary?.albums)


    return (
        <div>
            {(albums?.length >= 1) ?
                <div className="songsResultsMainHead">
                    <div className="songResultsTitleContainer">
                        <h2 className="songResultTitleText">Albums</h2>
                    </div>
                    <div className="playlist-detail-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="playlist-detail-table-header-play"></th>
                                    <th className="playlist-detail-table-header-image"></th>
                                    <th className="playlist-detail-table-header">ALBUM</th>
                                    <th className="playlist-detail-table-header"></th>
                                    <th className="playlist-detail-table-header">ARTIST</th>
                                </tr>
                                <tr className="playlist-detail-top-border"></tr>
                            </thead>
                            <tbody>
                                {albums?.map((album, i) =>
                                    <tr className="playlist-detail-table-row" key={i}>
                                        <td>
                                        </td>
                                        <td className="playlist-song-img-container">
                                            <img src={album.album_coverart_url} alt="album_cover"/>
                                        </td>
                                        <td className="playlist-detail-grey-text">
                                            <NavLink
                                                to={`/albums/${album?.album_name}`}
                                                className="no-text-dec"
                                            > {album?.album_name}
                                            </NavLink>
                                        </td>
                                        <td className="playlist-detail-grey-text"></td>
                                        <td className="playlist-detail-grey-text">
                                            <NavLink
                                                to={`/artists/${album?.artist_name}`}
                                                className="no-text-dec"
                                            > {album?.artist_name}
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
