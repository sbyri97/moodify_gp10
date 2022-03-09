import React from "react";
import "./MoodPlaylists.css";
import { useParams } from "react-router-dom";

function MoodPlaylists() {
  const mood = useParams();
  const moodId = Number(mood.moodId);
  const moodIndex = moodId - 1;

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

  return (
    <div className="mood-playlists-container">
      <div>
        <h1 className="mood-playlists-mood">Moodify's HAPPY Picks</h1>
      </div>
      <div className="mood-playlists-playlist-container">
        <div className="mood-playlists-card">
          <div className="mood-playlists-image-container">
            <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          </div>
          <div>
            <h2 className="mood-playlist-name">Happy Playlist</h2>
          </div>
        </div>
        <div className="mood-playlists-card">
          <div className="mood-playlists-image-container">
            <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          </div>
          <div>
            <h2 className="mood-playlist-name">Happy Playlist</h2>
          </div>
        </div>
        <div className="mood-playlists-card">
          <div className="mood-playlists-image-container">
            <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          </div>
          <div>
            <h2 className="mood-playlist-name">Happy Playlist</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodPlaylists;
