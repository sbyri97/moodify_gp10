import React from 'react';
import './home.css';
import Moods from './moods'


function Home(){
    return (
        <div className="homeMainDiv">
            <div className="sideBarContainer">
            </div>
            <div className="moodsContainer">
                <Moods />
            </div>
        </div>
    )
}

export default Home;
