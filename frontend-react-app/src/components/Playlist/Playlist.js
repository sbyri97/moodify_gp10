import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import "./Playlist.css";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import {
  getPlaylist,
  deletePlaylistThunk,
  deleteSongFromPlaylist,
} from "../../store/playlist";
import { getLibrary } from "../../store/library";
import PSearch from "../PlaylistSearchModal/playlistSearch";
import PlayListSearchModal from "../PlaylistSearchModal";
import EditPlaylistForm from "./EditPlaylist";

function Playlist() {
  const sessionUser = useSelector((state) => state?.session?.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const playlistIdParams = useParams();
  const playlistId = playlistIdParams.id;
  const [renderForm, setRenderForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const playlist = useSelector(
    (state) => state?.playlist?.playlists?.[playlistId]
  );
  const moodIndex = playlist?.mood_id - 1;

  const userOwns = sessionUser?.id === playlist?.user_id;

  useEffect(() => {
    dispatch(getPlaylist(playlistId));
  }, [dispatch, playlistId]);

  const playSong = (id, e) => {
    e.stopPropagation();
    const numId = Number(id);
    dispatch(getLibrary(numId));
  };

  // TO DO: change to modal
  const showEditPlaylistForm = (e) => {
    setRenderForm(true);
  };

  const deletePlaylist = () => {
    const result = dispatch(deletePlaylistThunk(playlistId));

    if (result) {
      history.push("/");
    }
  };

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const deleteSong = (songId, e) => {
    e.stopPropagation();
    dispatch(deleteSongFromPlaylist(playlistId, songId));
  };

  const moodColors = [
    "#EDFF00FF",
    "#f037a5",
    "#F62681",
    "#4b917d",
    "#cdf564",
    "#00A4CCFF",
    "#ff073a",
    "#F37778",
    "#963CBDFF",
  ];

  useEffect(() => {
    const playButton = document.querySelector(".playPause");
    playButton.style.backgroundColor = `${moodColors[moodIndex]}`;
    playButton.style.boxShadow = `0px 0px 20px ${moodColors[moodIndex]}`;

    const volumeButton = document.querySelector(".volumeButton");
    volumeButton.style.color = `${moodColors[moodIndex]}`;

    const playlistBackground = document.querySelector(
      ".playlist-detail-container "
    );
    playlistBackground.style.backgroundImage = `linear-gradient(180deg, ${moodColors[moodIndex]}, black)`;
  });

  return (
    <div className="playlist-detail-container">
      <div className="playlist-top-detail-container">
        <div className="playlist-detail-img-container">
          {!playlist?.songs?.[0]?.album_coverart_url ? (
            <img
              src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/song.png"
              alt="playlist_album_song_note_cover"
            />
          ) : (
            <img
              src={playlist?.songs?.[0]?.album_coverart_url}
              alt="playlist_album_cover"
            />
          )}
        </div>
        <div className="playlist-detail-text-container">
          <div className="playlist-text">PLAYLIST</div>
          <div className="playlist-detail-playlist-name">{playlist?.name}</div>
          <div className="playlist-detail-username">
            {playlist?.user[0]?.first_name} {playlist?.user[0]?.last_name}
          </div>
        </div>
      </div>
      {userOwns && (
        <div className="playlist-user-controls">
          <div className="playlist-detail-dots-container">
            <button className="playlist-detail-dot-button" onClick={openMenu}>
              <BsThreeDots className="playlist-detail-dots" />
            </button>
          </div>
          <div className="playlist-search-main-div">
            <PlayListSearchModal />
          </div>
        </div>
      )}
      {showMenu && (
        <div className="playlist-detail-dropdown">
          <div className="playlist-detail-dropdown-content">
            <button
              className="playlist-detail-edit-btn"
              onClick={showEditPlaylistForm}
            >
              Edit Playlist
            </button>
            {renderForm && (
              <EditPlaylistForm
                hideForm={() => {
                  setShowMenu(false);
                  setRenderForm(false);
                }}
                playlist={playlist}
                playlistId={playlistId}
              />
            )}
            <button
              className="playlist-detail-delete-btn"
              onClick={deletePlaylist}
            >
              Delete Playlist
            </button>
          </div>
        </div>
      )}
      <div className="playlist-detail-table-container">
        <table>
          <thead>
            <tr>
              <th className="playlist-detail-table-header-play"></th>
              <th className="playlist-detail-table-header-image"></th>
              <th className="playlist-detail-table-header">SONG</th>
              <th className="playlist-detail-table-header">ALBUM</th>
              <th className="playlist-detail-table-header">ARTIST</th>
              <th className="playlist-detail-table-header-delete"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="playlist-detail-top-border"></tr>
            {playlist?.songs?.map((song, i) => (
              <tr key={i} className="playlist-detail-table-row">
                <td>
                  <button
                    onClick={(e) => playSong(song?.id, e)}
                    className="playlist-playPause"
                  >
                    <FaPlay className="play" />
                  </button>
                </td>
                <td className="playlist-song-img-container">
                  <img src={song?.album_coverart_url} />
                </td>
                <td>{song?.song_title}</td>
                <td className="playlist-detail-grey-text">
                  <NavLink
                    to={`/albums/${song?.album_name}`}
                    className="no-text-dec"
                  >
                    {song?.album_name}
                  </NavLink>
                </td>
                <td className="playlist-detail-grey-text">
                  <NavLink
                    to={`/artists/${song?.artist_name}`}
                    className="no-text-dec"
                  >
                    {song?.artist_name}
                  </NavLink>
                </td>
                <td>
                  {userOwns && (
                    <button
                      className="playlist-detail-delete-song"
                      onClick={(e) => deleteSong(song?.id, e)}
                    >
                      X
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Playlist;
