import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import "./UserProfile.css";
import { getUserInfo } from "../../store/userfollow";

function UserFollowers() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state?.session?.user);

  useEffect(() => {
    dispatch(getUserInfo(sessionUser?.id));
  }, [dispatch, sessionUser?.id]);

  const followCount = useSelector((state) => state?.userProfiles?.followers);
  const following = useSelector((state) => state?.userProfiles?.following);

  return (
    <div className="user-profile-page-container">
      <div className="user-profile-top-section">
        <NavLink className="user-circle-link" to={`/users/${sessionUser?.id}`}>
          <FaUserCircle className="user-circle" />
        </NavLink>

        <div className="user-profile-info">
          <h1 className="user-profile-username">FOLLOWERS</h1>
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
      </div>
      <div className="user-follow-container">
        {followCount.length &&
          followCount?.map((user, i) => (
            <NavLink
              className="user-follow-card-container"
              to={`/users/${user.id}`}
              key={i}
            >
              <div className="user-follow-card">
                <div className="user-follow-card-pic-container">
                  <FaUserCircle className="user-follow-card-pic" />
                </div>
                <div className="user-follow-username-container">
                  <p className="user-follow-username">{user?.username}</p>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default UserFollowers;
