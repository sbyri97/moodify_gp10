import React from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./UserProfile.css";

function UserProfile() {
  const userParam = useParams();
  const userId = userParam.userId;
  console.log("USER====", userId);
  return (
    <div className="user-profile-page-container">
      <div className="user-profile-top-section">
        <div>
          <FaUserCircle className="user-circle" />
        </div>
        <div className="user-profile-info">
          <h1 className="user-profile-username">UserName</h1>
          <button className="user-profile-follow-button">Follow</button>
        </div>
      </div>
      <div className="user-profile-bottom-section">Hello World</div>
    </div>
  );
}

export default UserProfile;
