import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Playlist.css";
import { FaPlay } from "react-icons/fa";
import { getPlaylist } from "../../store/playlist";
import { getLibrary } from "../../store/library";

function Playlist() {
  const playlist = useSelector(
    (state) => state?.playlist?.playlists?.playlist_info
  );

  // THIS SHOULD BE THE OWNER OF THE PLAYLIST, NOT USER
  const sessionUser = useSelector((state) => state?.session?.user);

  const dispatch = useDispatch();
  const playlistIdParams = useParams();
  const playlistId = playlistIdParams.id;

  useEffect(() => {
    dispatch(getPlaylist(playlistId));
  }, [dispatch, playlistId]);

  const playSong = (id, e) => {
    e.stopPropagation();
    const numId = Number(id);
    dispatch(getLibrary(numId));
  };

  return (
    <div className="playlist-detail-container">
      <div className="playlist-top-detail-container">
        <div className="playlist-detail-img-container">
          <img src={playlist?.playlist_songs[0]?.album_coverart_url} />
        </div>
        <div className="playlist-detail-text-container">
          <div className="playlist-text">PLAYLIST</div>
          <div className="playlist-detail-playlist-name">
            {playlist?.playlist_name}
          </div>
          <div className="playlist-detail-username">
            {sessionUser?.username}
          </div>
        </div>
      </div>
      <div className="playlist-detail-table-container">
        <table>
          <tr>
            <th className="playlist-detail-table-header-play"></th>
            <th className="playlist-detail-table-header-image"></th>
            <th className="playlist-detail-table-header">SONG</th>
            <th className="playlist-detail-table-header">ALBUM</th>
            <th className="playlist-detail-table-header">ARTIST</th>
            <th className="playlist-detail-table-header-delete"></th>
          </tr>
          <tr className="playlist-detail-top-border"></tr>
          {playlist?.playlist_songs.map((song, i) => (
            <tr key={i} className="playlist-detail-table-row">
              <td>
                <button
                  onClick={(e) => playSong(song.id, e)}
                  className="playlist-playPause"
                >
                  <FaPlay className="play" />
                </button>
              </td>
              <td className="playlist-song-img-container">
                <img src={song.album_coverart_url} />
              </td>
              <td>{song.song_title}</td>
              <td className="playlist-detail-grey-text">{song.album_name}</td>
              <td className="playlist-detail-grey-text">{song.artist_name}</td>
              <td>
                <button className="playlist-detail-delete-song">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Playlist;
