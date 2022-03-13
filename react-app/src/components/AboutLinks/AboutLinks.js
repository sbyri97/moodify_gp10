import React from "react";
import { a } from "react-router-dom";
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
              <a
                href="https://github.com/Code-rina"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/katerina-kreibich-7a79a251/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="about-linkedin" />
              </a>
            </div>
            <h2>Katerina Kreibich</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiMicrophone className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood1">Dance With Me</p>
            </div>
          </div>
        </div>
        <div className="about-card-container1">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <a
                href="https://github.com/Joan-Buck"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joan-buck/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="about-linkedin" />
              </a>
            </div>
            <h2>Joan Buck</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiGuitar className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood2">Grunge &amp; Angst</p>
            </div>
          </div>
        </div>
        <div className="about-card-container2">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <a
                href="https://github.com/alexsmaldone"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alex-smaldone/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="about-linkedin" />
              </a>
            </div>
            <h2>Alex Smaldone</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiSaxophone className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood3">Passion</p>
            </div>
          </div>
        </div>
        <div className="about-card-container3">
          <div className="about-top-card-container">
            <div className="about-socials-container">
              <a
                href="https://github.com/sbyri97"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-byri-2230015/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="about-linkedin" />
              </a>
            </div>
            <h2>Sai Byri</h2>
          </div>
          <div className="about-bottom-card-container">
            <div className="about-instrument-container">
              <GiDrumKit className="about-instrument" />
            </div>
            <div className="about-text-container">
              <p>Moodify Playlist Pick:</p>
              <p className="about-mood4">Party Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLinks;
