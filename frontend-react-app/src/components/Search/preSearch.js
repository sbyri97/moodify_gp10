import React, { useEffect } from "react";
import '../Playlist/Playlist.css'
import './search.css'
import { useDispatch, useSelector } from "react-redux";
import { getRandomPlaylists } from "../../store/library";

export default function PreSearch() {
    const dispatch = useDispatch();

    const randomPlaylists = useSelector((state) => state.library.itemLibrary.random_playlists)


    useEffect(() => {

        dispatch(getRandomPlaylists())

    }, [dispatch])



    return (
        <div className="preSearchMainContainer">
            <div>
                <h2 className="preSearchBrowsePlaylistsText">Browse Playlists</h2>
            </div>
            <div className="results-playlists-cards">
                {randomPlaylists?.map((playlist, i) =>
                <div className="results-playlists-outer-indiv-card" key={i}>
                    <div className="results-playlists-inner-indiv-card">
                        <img src={'https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg'} className='playlist-card-img' alt="img"></img>
                        <div className="results-playlist-cards-content">
                            <h2 className="results-playlist-cards-text">{playlist.name}</h2>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
