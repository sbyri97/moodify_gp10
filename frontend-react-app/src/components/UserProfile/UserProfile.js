import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./UserProfile.css";
import { getUserInfo, createFollow } from "../../store/userfollow";

function UserProfile() {
  const userParam = useParams();
  const userId = userParam.userId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const sessionUser = useSelector((state) => state?.session?.user);
  const currentUser = useSelector(
    (state) => state?.userInfo?.userInfo?.userInfo
  );
  const userPlaylists = useSelector(
    (state) => state?.userInfo?.userInfo?.userPlaylists
  );

  function followUser() {
    dispatch(createFollow(userId, 2));
  }
  console.log("User=====", currentUser);
  console.log("playlists=====", userPlaylists);

  return (
    <div className="user-profile-page-container">
      <div className="user-profile-top-section">
        <div>
          <FaUserCircle className="user-circle" />
        </div>
        <div className="user-profile-info">
          <h1 className="user-profile-username">{currentUser?.username}</h1>
          <button className="user-profile-follow-button">Follow</button>
        </div>
      </div>
      <div className="mood-playlists-playlist-container">
        {userPlaylists?.map((playlist, i) => (
          <NavLink to={`/playlists/${playlist?.id}`} key={i}>
            <div className="mood-playlists-card">
              <div className="mood-playlists-image-container">
                <img src={playlist?.mood_image} />
              </div>
              <div className="mood-playlist-name-container">
                <h2 className="mood-playlist-name">{playlist?.name}</h2>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
