import React from 'react';
import './home.css';
import SideBar from './Sidebar';
import Moods from './moods'




function Home(){
    return (
        <div className="homeMainDiv">
            <div className="sideBarContainer">
                <SideBar />
            </div>
            <div className="moodsContainer">
                <Moods />
            </div>
        </div>
    )
}

export default Home;
