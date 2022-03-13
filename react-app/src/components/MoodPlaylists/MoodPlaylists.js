import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MoodPlaylists.css";
import { NavLink, useParams } from "react-router-dom";
import { getMoodPlaylists } from "../../store/playlist";

function MoodPlaylists() {
  const moodCardsArray = useRef([]);
  const moodPlaylistArray = useRef([]);

  const mood = useParams();
  const dispatch = useDispatch();
  const moodId = Number(mood.moodId);
  const moodIndex = moodId - 1;

  const moodInfo = useSelector((state) => state?.playlist?.mood);
  const moodImage = moodInfo?.mood?.image_url;

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
    dispatch(getMoodPlaylists(moodId));
  }, [dispatch, moodId]);

  useEffect(() => {
    const moodTitle = document.querySelector(".mood-playlists-mood");

    moodTitle.style.color = moodColors[moodIndex];
    const playButton = document.querySelector(".playPause");
    playButton.style.backgroundColor = `${moodColors[moodIndex]}`;
    playButton.style.boxShadow = `0px 0px 20px ${moodColors[moodIndex]}`;

    const volumeButton = document.querySelector(".volumeButton");
    volumeButton.style.color = `${moodColors[moodIndex]}`;

    const progressBar = document.querySelector(".progressBar");
    progressBar.style.setProperty(
      "--seek-before-color",
      `${moodColors[moodIndex]}`
    );

    moodCardsArray?.current?.forEach(
      (card) => (card.style.boxShadow = `0px 0px 8px ${moodColors[moodIndex]}`)
    );
    moodPlaylistArray?.current?.forEach(
      (playlistName) =>
        (playlistName.style.textShadow = `0px 0px 5px ${moodColors[moodIndex]}`)
    );
  });

  return (
    <div className="mood-playlists-container">
      <div>
        <h1 className="mood-playlists-mood">
          Moodify's {moodInfo?.mood?.name.toUpperCase()} Playlist Picks
        </h1>
      </div>

      <div className="mood-playlists-playlist-container">
        {moodInfo?.moodPlaylists?.map((playlist, i) => (
          <NavLink to={`/playlists/${playlist?.id}`} key={i}>
            <div
              className="mood-playlists-card"
              ref={(ele) => (moodCardsArray.current[i] = ele)}
            >
              <div className="mood-playlists-image-container">
                <img src={moodImage} alt="mood_img" />
              </div>
              <div className="mood-playlist-name-container">
                <h2
                  className="mood-playlist-name"
                  ref={(ele) => (moodPlaylistArray.current[i] = ele)}
                >
                  {playlist?.name}
                </h2>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MoodPlaylists;
