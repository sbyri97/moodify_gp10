import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'


export default function UserSearch() {

    const users = useSelector((state) => state.library.library.users)

    return (
        <div>
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
        </div>
    )
}
