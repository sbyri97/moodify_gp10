import React from "react";
import "./MoodPlaylists.css";

function MoodPlaylists() {
  return (
    <div className="mood-playlists-container">
      <div>
        <h1>Moodify's HAPPY Picks</h1>
      </div>
      <div className="mood-playlists-playlist-container">
        <div className="mood-playlists-card">
          <div className="mood-playlists-image-container">
            <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodPlaylists;
