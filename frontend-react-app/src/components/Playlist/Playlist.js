import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Playlist.css";
import { FaPlay } from "react-icons/fa";
import { getPlaylist } from "../../store/playlist";

function Playlist() {

  const playlist = useSelector(state => state.playlist.playlists)
  const dispatch = useDispatch()
  const playlistIdParams = useParams()
  const playlistId = playlistIdParams.id

  useEffect(() => {
      dispatch(getPlaylist(playlistId))
  }, [dispatch, playlistId])

  return (
    <div className="playlist-detail-container">
      <div className="playlist-top-detail-container">
        <div className="playlist-detail-img-container">
          <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
        </div>
        <div className="playlist-detail-text-container">
          <div className="playlist-text">PLAYLIST</div>
          <div className="playlist-detail-playlist-name">Playlist Name</div>
          <div className="playlist-detail-username">Username</div>
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
          <tr className="playlist-detail-table-row">
            <td>
              <button className="playlist-playPause">
                <FaPlay className="play" />
              </button>
            </td>
            <td className="playlist-song-img-container">
              <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
            </td>
            <td>Rumour Has It</td>
            <td className="playlist-detail-grey-text">21</td>
            <td className="playlist-detail-grey-text">Adele</td>
            <td>
              <button className="playlist-detail-delete-song">Delete</button>
            </td>
          </tr>
          <tr className="playlist-detail-table-row">
            <td>
              <button className="playlist-playPause">
                <FaPlay className="play" />
              </button>
            </td>
            <td className="playlist-song-img-container">
              <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
            </td>
            <td>Rumour Has It</td>
            <td className="playlist-detail-grey-text">21</td>
            <td className="playlist-detail-grey-text">Adele</td>
            <td>
              <button className="playlist-detail-delete-song">Delete</button>
            </td>
          </tr>
          <tr className="playlist-detail-table-row">
            <td>
              <button className="playlist-playPause">
                <FaPlay className="play" />
              </button>
            </td>
            <td className="playlist-song-img-container">
              <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
            </td>
            <td>Rumour Has It</td>
            <td className="playlist-detail-grey-text">21</td>
            <td className="playlist-detail-grey-text">Adele</td>
            <td>
              <button className="playlist-detail-delete-song">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Playlist;
