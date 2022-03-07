import React from "react";
import "./songs.css";
import { FaPlay } from "react-icons/fa";
import { getLibrary } from "../../store/library.js";
import { useDispatch } from "react-redux";

function Songs() {
  const dispatch = useDispatch();

  const id = 1;
  const artist_name = "Bobby McFerrin";
  const song_title = "Don't Worry Be Happy";
  const song_url =
    "https://moodify.s3.amazonaws.com/Happy/Bobby+McFerrin+-+Don't+Worry+Be+Happy+(Official+Music+Video).mp3";
  const album_coverart_url =
    "https://upload.wikimedia.org/wikipedia/en/c/c7/Simple_Pleasures_cover.jpg";

  const songObj = { id, artist_name, song_title, album_coverart_url };

  const playSong = () => {
    dispatch(getLibrary(id));
  };

  return (
    <div className="song-card">
      <div className="song-img-text-container">
        <div className="song-img-container">
          <img src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg" />
        </div>
        <div className="song-card-info">
          <div className="song-card-song-name">Song Name</div>
          <div className="song-card-artist-name">Artist Name</div>
        </div>
      </div>

      <div className="song-button-container">
        <button className="song-card-add-song">+ Add Song</button>
        <button className="song-card-play-song" onClick={playSong}>
          <FaPlay className="play" />
        </button>
      </div>
    </div>
  );
}

export default Songs;
