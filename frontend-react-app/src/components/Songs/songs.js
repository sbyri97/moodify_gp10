import React from "react";
import "./songs.css";

function Songs() {
  return (
    <div className="song-card">
      <div className="song-img-text-container">
        <div className="song-img-container">
          <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
        </div>
        <div className="song-card-info">
          <div className="song-card-song-name">Song Name</div>
          <div className="song-card-Artist-name">Artist Name</div>
        </div>
      </div>

      <div className="song-button-container">
        <button>Add Song</button>
        <button>Play Song</button>
      </div>
    </div>
  );
}

export default Songs;
