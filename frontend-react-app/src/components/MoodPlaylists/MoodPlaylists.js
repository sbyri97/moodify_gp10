import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MoodPlaylists.css";
import { NavLink, useParams } from "react-router-dom";
import { getMoodPlaylists } from "../../store/playlist";

function MoodPlaylists() {
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

    const moodTitle = document.querySelector(".mood-playlists-mood");
    moodTitle.style.color = moodColors[moodIndex];
  }, [dispatch, moodId]);

  return (
    <div className="mood-playlists-container">
      <div>
        <h1 className="mood-playlists-mood">
          Moodify's {moodInfo?.mood?.name.toUpperCase()} Picks
        </h1>
      </div>

      <div className="mood-playlists-playlist-container">
        {moodInfo?.moodPlaylists?.map((playlist, i) => (
          <NavLink to={`/playlists/${playlist?.id}`} key={i}>
            <div className="mood-playlists-card">
              <div className="mood-playlists-image-container">
                <img src={moodImage} />
              </div>
              <div>
                <h2 className="mood-playlist-name">{playlist?.name}</h2>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MoodPlaylists;
