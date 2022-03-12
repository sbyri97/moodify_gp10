import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { getArtistSongs } from "../../store/playlist";
import { getLibrary } from "../../store/library";
import "../Playlist/Playlist.css";

function Artists() {

  const sessionUser = useSelector((state) => state?.session?.user);

  const dispatch = useDispatch();
  const artistParam = useParams();
  const artistName = artistParam.artistName;
  const songs = useSelector(
    (state) => state.playlist.playlists?.[artistName]
    );

  useEffect(() => {
    dispatch(getArtistSongs(artistName));
  }, [artistName, dispatch]);

  const playSong = (id, e) => {
    e.stopPropagation();
    const numId = Number(id);
    dispatch(getLibrary(numId));
  };

  return (
    <div className="playlist-detail-container">
      <div className="playlist-top-detail-container">
        <div className="playlist-detail-img-container">
          <img
            src={songs?.songs?.[0]?.album_coverart_url}
            alt={songs?.songs?.[0]?.artist_name}
          />
        </div>
        <div className="playlist-detail-text-container">
          <div className="playlist-text">ARTIST</div>
          <div className="playlist-detail-playlist-name">
            {songs?.songs?.[0]?.artist_name}
          </div>
          <div className="playlist-detail-username">
            {sessionUser?.username}
          </div>
        </div>
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
          </thead>
          <tbody>
            <tr className="playlist-detail-top-border"></tr>
            {songs?.songs?.map((song, i) => (
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
                  <img src={song?.album_coverart_url} alt={song?.artist_name} />
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Artists;
