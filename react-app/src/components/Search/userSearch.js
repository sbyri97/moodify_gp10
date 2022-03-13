import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import './search.css'
import { NavLink } from "react-router-dom";


export default function UserSearch() {

    const users = useSelector((state) => state.library.itemLibrary.users)

    return (
        <div>
            {(users?.length >= 1) ?
                <div className="songsResultsMainHead">
                    <div className="songResultsTitleContainer">
                        <h2 className="songResultTitleText">Users</h2>
                    </div>
                    <div className="playlist-detail-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="playlist-detail-table-header-play"></th>
                                    <th className="playlist-detail-table-header-image"></th>
                                    <th className="playlist-detail-table-header">USER</th>
                                    <th className="playlist-detail-table-header"></th>
                                    <th className="playlist-detail-table-header"></th>
                                </tr>
                                <tr className="playlist-detail-top-border"></tr>
                            </thead>
                            <tbody>
                                {users?.map((user, i) =>
                                    <tr className="playlist-detail-table-row" key={i}>
                                        <td>
                                        </td>
                                        <td className="playlist-song-img-container">
                                            <i className="fa-solid fa-user"></i>
                                        </td>
                                        <td>
                                        <NavLink
                                            to={`/users/${user?.id}`}
                                            className="no-text-dec"
                                        > {user.username}
                                        </NavLink>
                                        </td>
                                        <td className="playlist-detail-grey-text"></td>
                                        <td className="playlist-detail-grey-text"></td>
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
