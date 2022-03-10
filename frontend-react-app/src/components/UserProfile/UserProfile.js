import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./UserProfile.css";
import { getUserInfo } from "../../store/userfollow";

function UserProfile() {
  const userParam = useParams();
  const userId = userParam.userId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const currentUser = useSelector(
    (state) => state?.userInfo?.userInfo?.userInfo
  );
  const userPlaylists = useSelector(
    (state) => state?.userInfo?.userInfo?.userPlaylists
  );

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
      <div className="user-profile-bottom-section">Hello World</div>
    </div>
  );
}

export default UserProfile;
