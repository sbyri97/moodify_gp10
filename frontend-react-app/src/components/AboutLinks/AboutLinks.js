import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GiMicrophone, GiGuitar, GiSaxophone, GiDrumKit } from "react-icons/gi";

import "./AboutLinks.css";

function AboutLinks() {
  return (
    <div className="about-page-container">
      <div className="about-top-container">
        <h1>Meet the Moodify Team</h1>
      </div>
      <div className="about-bottom-container">
        <div className="about-card-container">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <BsGithub />
              <BsLinkedin className="about-linkedin" />
            </div>
            <h2>Katerina Kreibich</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiMicrophone className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood1">Energetic</p>
            </div>
          </div>
        </div>
        <div className="about-card-container1">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <BsGithub />
              <BsLinkedin className="about-linkedin" />
            </div>
            <h2>Joan Buck</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiGuitar className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood2">Angry</p>
            </div>
          </div>
        </div>
        <div className="about-card-container2">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <BsGithub />
              <BsLinkedin className="about-linkedin" />
            </div>
            <h2>Alex Smaldone</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiSaxophone className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood3">Romantic</p>
            </div>
          </div>
        </div>
        <div className="about-card-container3">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <BsGithub />
              <BsLinkedin className="about-linkedin" />
            </div>
            <h2>Sai Byri</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiDrumKit className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood4">Chill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLinks;
