import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import "./UserProfile.css";
import {
  getUserInfo,
  createFollow,
  deleteFollow,
} from "../../store/userfollow";

function UserProfile() {
  const userParam = useParams();
  const userId = userParam.userId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch, userId]);

  const sessionUser = useSelector((state) => state?.session?.user);
  const currentUser = useSelector(
    (state) => state?.userProfiles?.profileInfo?.userInfo
  );

  const userPlaylists = useSelector(
    (state) => state?.userProfiles?.profileInfo?.userPlaylists
  );

  const followCount = useSelector((state) => state?.userProfiles?.followers);
  const following = useSelector((state) => state?.userProfiles?.following);
  console.log(following);

  const isFollowing = useSelector((state) => state?.userProfiles?.isFollowing);

  function followUser() {
    dispatch(createFollow(userId, sessionUser?.id));
  }

  function unfollowUser() {
    dispatch(deleteFollow(userId));
  }

  const isOwner = userId == sessionUser?.id;

  return (
    <div className="user-profile-page-container">
      <div className="user-profile-top-section">
        <div>
          <FaUserCircle className="user-circle" />
        </div>
        {isOwner ? (
          <div className="user-profile-info">
            <h1 className="user-profile-username">MY PLAYLISTS</h1>
            <div className="following-info">
              <NavLink
                to={`/users/${sessionUser?.id}/followers`}
                className="user-follower-count"
              >
                {followCount?.length}{" "}
                {followCount?.length === 1 ? "Follower" : "Followers"}
              </NavLink>
              <NavLink
                to={`/users/${sessionUser?.id}/following`}
                className="user-following-count"
              >
                {following?.length} Following
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="user-profile-info">
            <h1 className="user-profile-username">{currentUser?.username}</h1>
            {isFollowing ? (
              <button
                className="user-profile-following-button"
                onClick={unfollowUser}
              >
                Following
              </button>
            ) : (
              <button
                className="user-profile-follow-button"
                onClick={followUser}
              >
                Follow
              </button>
            )}
          </div>
        )}
      </div>
      <div className="mood-playlists-playlist-container">
        {isOwner &&
          userPlaylists?.map((playlist, i) => (
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
        {!isFollowing && !isOwner && (
          <div className="not-following-div">
            <GiMusicalNotes className="musical-note" />
            <h2 className="not-following-message">
              Follow this user to see their playlists!
            </h2>
            <GiMusicalNotes className="musical-note" />
          </div>
        )}
        {isFollowing &&
          userPlaylists?.map((playlist, i) => (
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
