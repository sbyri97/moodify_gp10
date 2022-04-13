import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useSelector } from "react-redux";

import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [muteState, setMuteState] = useState(false);

  const sessionUser = useSelector((state) => state?.session?.user);

  const currentSong = useSelector((state) => state?.library?.library);
  const songTitle = currentSong?.song_title;
  const songURL = currentSong?.song_url;
  const songArt = currentSong?.album_coverart_url;
  const songArtistName = currentSong?.artist_name;

  // references
  const audioPlayer = useRef(); // reference audio component
  const progressBar = useRef(); // reference progress bar
  const animationRef = useRef(); // reference animation
  const volumeSlider = useRef(); // reference the volume slider

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    progressBar.current.value = 0;
    audioPlayer.current.currentTime = 0;
    changePlayerCurrentTime();

    if (songURL) {
      playSong();
    }
  }, [currentSong]);

  useEffect(() => {
    setIsPlaying(false);
    audioPlayer.current.pause();
  }, []);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const playSong = () => {
    setIsPlaying(true);
    audioPlayer?.current?.play()?.catch(() => { });
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer?.current?.play()?.catch(() => { });
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (
      progressBar.current &&
      audioPlayer.current &&
      audioPlayer.current.currentTime
    ) {
      progressBar.current.value = audioPlayer.current.currentTime;
    }
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = progressBar.current?.value;
    }
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar?.current?.style?.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / audioPlayer.current?.duration) * 100}%`
    );
    setCurrentTime(progressBar?.current?.value);
  };

  const changeVolume = () => {
    const currentVolume = Number(volumeSlider.current.value);
    audioPlayer.current.volume = currentVolume / 100;
  };

  const muteVolume = () => {
    volumeSlider.current.value = 0;
    audioPlayer.current.volume = 0;
    setMuteState(true);
  };

  const volumeOn = () => {
    volumeSlider.current.value = 100;
    audioPlayer.current.volume = 1;
    setMuteState(false);
  };

  return (
    <div className="audioPlayer">
      <div className="playingSongInfo">
        <div className="playerSongImgContainer">
          {songArt ? (
            <img src={songArt} alt="currently playing song album cover" />
          ) : (
            <></>
          )}
        </div>
        <div className="playingSongText">
          <div className="playingSongTitle">{songTitle}</div>
          <div className="playingSongArtist">{songArtistName}</div>
        </div>
      </div>

      <div className="songPlayerControls">
        <audio
          autoPlay={false}
          ref={audioPlayer}
          src={songURL}
          preload="metadata"
          onLoadedData={() => {
            progressBar.current.max = Math.floor(audioPlayer.current?.duration);
          }}
        ></audio>
        <button onClick={togglePlayPause} className="playPause">
          {isPlaying ? <FaPause /> : <FaPlay className="play" />}
        </button>

        <div className="timingBarContainer">
          {/* current time */}
          <div className="currentTime">{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div className="progressBarContainer">
            <input
              type="range"
              className="progressBar"
              defaultValue="0"
              step="0.05"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>

          {/* duration */}
          <div className="duration">
            {audioPlayer.current?.duration &&
              !isNaN(audioPlayer.current.duration)
              ? calculateTime(audioPlayer.current.duration)
              : "0:00"}
          </div>
        </div>
      </div>

      <div className="volumeControls">
        {audioPlayer?.current?.volume && !muteState ? (
          <button onClick={muteVolume} className="volumeButton">
            <FiVolume2 />
          </button>
        ) : (
          <button onClick={volumeOn} className="volumeButton">
            <FiVolumeX />
          </button>
        )}

        <input
          className="progressBar"
          type="range"
          id="volume-slider"
          max="100"
          defaultValue="100"
          ref={volumeSlider}
          onChange={changeVolume}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
