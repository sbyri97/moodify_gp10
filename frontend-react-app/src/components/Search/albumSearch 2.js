import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'


export default function AlbumSearch() {

    const albums = useSelector((state) => state.library.library.albums)


    return (
        <div>
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
        </div>
    )
}
