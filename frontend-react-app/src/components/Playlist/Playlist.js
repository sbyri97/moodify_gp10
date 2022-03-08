import React from "react";

function Playlist() {
  return (
    <div className="playlist-detail-container">
      <div>Playlist</div>
      <div>
        <table>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist Name</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <button>Play</button>
            </td>
            <td className="playlist-song-img-container">
              <img src="" />
            </td>
            <td>Rumour Has It</td>
            <td>21</td>
            <td>Adele</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Play</button>
            </td>
            <td className="playlist-song-img-container">
              <img src="" />
            </td>
            <td>Rumour Has It</td>
            <td>21</td>
            <td>Adele</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Play</button>
            </td>
            <td className="playlist-song-img-container">
              <img src="" />
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
