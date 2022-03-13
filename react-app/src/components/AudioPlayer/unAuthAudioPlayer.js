import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import SignUpFormModal from "../auth/SignUpFormModal";
import AudioPlayer from "./AudioPlayer";
import "./AudioPlayer.css";

const UnAuthAudioPlayer = () => {
    const sessionUser = useSelector((state) => state.session?.user)

    const onClick = (e) => {
        e.stopPropagation()

    }

    return (
        <div className="audioplayer-overall-container">
            {(!sessionUser) ?
            <div className="prelogin-audioplayer-container">
                <div className="prelogin-signup-button">
                    <SignUpFormModal />
                </div>
            </div>
            :
            <AudioPlayer />
            }
        </div>
    )
}

export default UnAuthAudioPlayer;
