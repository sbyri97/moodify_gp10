import React from "react";
import "./Playlist.css";
import { FaPlay } from "react-icons/fa";

function Playlist() {
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
            <th className="playlist-detail-table-header-image">Image</th>
            <th className="playlist-detail-table-header">Title</th>
            <th className="playlist-detail-table-header">Album</th>
            <th className="playlist-detail-table-header">Artist Name</th>
            <th className="playlist-detail-table-header"></th>
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
            <td>21</td>
            <td>Adele</td>
            <td>
              <button>Delete</button>
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
            <td>21</td>
            <td>Adele</td>
            <td>
              <button>Delete</button>
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
            <td>21</td>
            <td>Adele</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Playlist;
