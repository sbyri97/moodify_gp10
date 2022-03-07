import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [muteState, setMuteState] = useState(false);

  // references
  const audioPlayer = useRef(); // reference audio component
  const progressBar = useRef(); // reference progress bar
  const animationRef = useRef(); // reference animation
  const volumeSlider = useRef(); // reference the volume slider

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
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

  // const backThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value - 30);
  //   changeRange();
  // };

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // };

  {
    /* <button className="forwardBackward" onClick={backThirty}>
    <BsArrowLeftShort /> 30
  </button> */
  }
  {
    /* <button className="forwardBackward" onClick={forwardThirty}>
    30 <BsArrowRightShort />
  </button> */
  }

  return (
    <div className="audioPlayer">
      <div className="playingSongInfo">
        <div className="playerSongImgContainer">
          <img
            src="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg"
            alt="pic of adele"
          />
        </div>
        <div className="playingSongText">
          <div className="playingSongTitle">Someone Like You</div>
          <div className="playingSongArtist">Adele</div>
        </div>
      </div>

      <div className="songPlayerControls">
        <audio
          ref={audioPlayer}
          src="https://moodify.s3.amazonaws.com/Heartbreak/Adele+-+Someone+Like+You+(Lyrics).mp3"
          preload="metadata"
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
            {duration && !isNaN(duration) && calculateTime(duration)}
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
